import { useState, useEffect } from 'react';

const STORAGE_KEY = 'hasVisitedBefore';

export const useTutorial = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem(STORAGE_KEY);
    if (hasVisited) {
      setIsFirstVisit(false);
    }
  }, []);

  const handleTutorialComplete = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsFirstVisit(false);
  };

  return {
    isFirstVisit,
    onComplete: handleTutorialComplete,
  };
};