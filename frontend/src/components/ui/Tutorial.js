import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TUTORIAL_STEPS } from "../../constants/ui";

export const Tutorial = ({ isFirstVisit, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(isFirstVisit);

  const handleNext = () => {
    if (currentStep < TUTORIAL_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowTutorial(false);
      onComplete();
    }
  };

  const handleSkip = () => {
    setShowTutorial(false);
    onComplete();
  };

  if (!showTutorial) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="tutorial-overlay"
      >
        <motion.div
          key={`step-${currentStep}`}
          className="tutorial-card"
          style={TUTORIAL_STEPS[currentStep].position}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{TUTORIAL_STEPS[currentStep].title}</h3>
          <p>{TUTORIAL_STEPS[currentStep].content}</p>
          <div className="tutorial-controls">
            <button className="tutorial-button" onClick={handleSkip}>
              Skip Tutorial
            </button>
            <div className="tutorial-progress">
              {TUTORIAL_STEPS.map((_, index) => (
                <span
                  key={index}
                  className={`progress-dot ${
                    index === currentStep ? "active" : ""
                  }`}
                />
              ))}
            </div>
            <button className="tutorial-button primary" onClick={handleNext}>
              {currentStep === TUTORIAL_STEPS.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};