import React from 'react';
import { motion } from 'framer-motion';
import { handleDragStart, handleDragEnd } from '../../utils/dragAndDrop';

export const DraggableNode = ({ type, label, isFloating = false, isSidebar = false }) => {
  const getBaseStyle = () => {
    if (isSidebar) {
      return {
        cursor: 'grab',
        width: '100%',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        background: 'rgba(176, 137, 246, 0.1)',
        border: '1px solid rgba(176, 137, 246, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        color: 'var(--text-color)',
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'left',
        userSelect: 'none',
        marginBottom: '4px',
      };
    }

    if (isFloating) {
      return {
        cursor: 'grab',
        minWidth: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid rgba(176, 137, 246, 0.3)',
        boxShadow: '0 4px 12px rgba(176, 137, 246, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        color: '#fff',
        fontSize: '11px',
        fontWeight: '600',
        textAlign: 'center',
        userSelect: 'none',
      };
    }

    // Default style
    return {
      cursor: 'grab',
      minWidth: '80px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
      justifyContent: 'center',
      flexDirection: 'column',
      border: '2px solid rgba(176, 137, 246, 0.3)',
      boxShadow: '0 4px 12px rgba(176, 137, 246, 0.3)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      color: '#fff',
      fontSize: '13px',
      fontWeight: '600',
      textAlign: 'center',
      userSelect: 'none',
    };
  };

  const getHoverEffects = () => {
    if (isSidebar) {
      return {
        scale: 1.02,
        background: 'rgba(176, 137, 246, 0.2)',
        borderColor: 'var(--primary-color)',
      };
    }

    return {
      scale: 1.05,
      boxShadow: '0 6px 16px rgba(176, 137, 246, 0.4)'
    };
  };

  const handleDragStartWrapper = (event) => {
    console.log("[DraggableNode.js] Dragging event:", event); // should match NODE_TYPES key
    console.log("[DraggableNode.js] Dragging label:", label); // should match NODE_TYPES key
    console.log("[DraggableNode.js] Dragging type:", type); // should match NODE_TYPES key
    handleDragStart(event, type);
  };


  const handleDragEndWrapper = (event) => {
    event.stopPropagation();
    handleDragEnd(event);
  };

  return (
    <motion.div
      className={`draggable-node ${type} ${isSidebar ? 'sidebar-node' : ''}`}
      onDragStart={handleDragStartWrapper}
      onDragEnd={handleDragEndWrapper}
      style={getBaseStyle()}
      draggable
      whileHover={getHoverEffects()}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        if (!isSidebar) {
          e.target.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--tertiary-color))';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSidebar) {
          e.target.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        }
      }}
    >
      <span>{label}</span>
    </motion.div>
  );
};