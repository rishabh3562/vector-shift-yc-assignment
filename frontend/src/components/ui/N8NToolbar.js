import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DraggableNode } from './DraggableNode';
import { NODE_TYPES, NODE_LABELS } from '../../constants/nodeTypes';

// Node descriptions for better UX
const NODE_DESCRIPTIONS = {
    [NODE_TYPES.INPUT]: 'Start your pipeline with input data',
    [NODE_TYPES.OUTPUT]: 'Output the final result of your pipeline',
    [NODE_TYPES.LLM]: 'Large Language Model for AI processing',
    [NODE_TYPES.TEXT]: 'Process and manipulate text with variables',
    [NODE_TYPES.MERGE]: 'Combine multiple inputs into one output',
    [NODE_TYPES.FILTER]: 'Filter data based on conditions',
    [NODE_TYPES.TEMPLATE]: 'Create templates with dynamic variables',
    [NODE_TYPES.VALIDATION]: 'Validate data against rules',
    [NODE_TYPES.TRANSFORM]: 'Transform data format and structure',
};

// Icons for each node type
const NODE_ICONS = {
    [NODE_TYPES.INPUT]: '📥',
    [NODE_TYPES.OUTPUT]: '📤',
    [NODE_TYPES.LLM]: '🤖',
    [NODE_TYPES.TEXT]: '📝',
    [NODE_TYPES.MERGE]: '🔗',
    [NODE_TYPES.FILTER]: '🔍',
    [NODE_TYPES.TEMPLATE]: '📄',
    [NODE_TYPES.VALIDATION]: '✅',
    [NODE_TYPES.TRANSFORM]: '🔄',
};

export const N8NToolbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const nodeTypeEntries = Object.entries(NODE_TYPES);

    return (
        <>
            {/* Plus Button */}
            <motion.button
                className="n8n-add-button"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.button>

            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="n8n-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleSidebar}
                        />

                        {/* Sidebar */}
                        <motion.div
                            className="n8n-sidebar"
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <div className="n8n-sidebar-header">
                                <h3>Add Node</h3>
                                <button
                                    className="n8n-close-button"
                                    onClick={toggleSidebar}
                                >
                                    ×
                                </button>
                            </div>

                            <div className="n8n-sidebar-content">
                                {nodeTypeEntries.map(([key, type], index) => (
                                    <motion.div
                                        key={type}
                                        className="n8n-node-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        // Remove onClick to prevent interference with drag
                                        style={{
                                            pointerEvents: 'none',  // Disable pointer events on container
                                            position: 'relative'
                                        }}
                                    >
                                        <div className="n8n-node-icon">
                                            {NODE_ICONS[type]}
                                        </div>
                                        <div className="n8n-node-info">
                                            <div style={{ pointerEvents: 'auto' }}>  {/* Re-enable for draggable node */}
                                                <DraggableNode
                                                    type={type}
                                                    label={NODE_LABELS[type]}
                                                    isFloating={false}
                                                    isSidebar={true}
                                                />
                                            </div>
                                            <p className="n8n-node-description">
                                                {NODE_DESCRIPTIONS[type]}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};