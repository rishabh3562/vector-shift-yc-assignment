import React from 'react';
import { motion } from 'framer-motion';
import { handleDragStart, handleDragEnd } from '../../utils/dragAndDrop';

export const DraggableNode = ({ type, label, isFloating = false }) => {
  const baseStyle = {
    cursor: 'grab',
    minWidth: isFloating ? '60px' : '80px',
    height: isFloating ? '60px' : '60px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: isFloating ? '50%' : '12px',
    background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '2px solid rgba(176, 137, 246, 0.3)',
    boxShadow: '0 4px 12px rgba(176, 137, 246, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: '#fff',
    fontSize: isFloating ? '11px' : '13px',
    fontWeight: '600',
    textAlign: 'center',
    userSelect: 'none',
  };

  return (
    <motion.div
      className={`draggable-node ${type}`}
      onDragStart={(event) => handleDragStart(event, type)}
      onDragEnd={handleDragEnd}
      style={baseStyle}
      draggable
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 6px 16px rgba(176, 137, 246, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        e.target.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--tertiary-color))';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
      }}
    >
      <span>{label}</span>
    </motion.div>
  );
};