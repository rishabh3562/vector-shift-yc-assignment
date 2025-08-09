import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DraggableNode } from './DraggableNode';
import { NODE_TYPES, NODE_LABELS } from '../../constants/nodeTypes';

export const FloatingToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nodeTypeEntries = Object.entries(NODE_TYPES);

  const toggleToolbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-toolbar-container">
      {/* Main Toggle Button */}
      <motion.button
        className="floating-toolbar-toggle"
        onClick={toggleToolbar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Floating Nodes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-nodes-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {nodeTypeEntries.map(([key, type], index) => (
              <motion.div
                key={type}
                className="floating-node-wrapper"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  x: Math.cos((index * 2 * Math.PI) / nodeTypeEntries.length) * 120,
                  y: Math.sin((index * 2 * Math.PI) / nodeTypeEntries.length) * 120
                }}
                exit={{ opacity: 0, scale: 0, rotate: 180 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
              >
                <DraggableNode 
                  type={type} 
                  label={NODE_LABELS[type]}
                  isFloating={true}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background overlay when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-toolbar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleToolbar}
          />
        )}
      </AnimatePresence>
    </div>
  );
};