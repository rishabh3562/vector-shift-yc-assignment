import React from "react";
import { Handle, Position } from "reactflow";
import { motion } from "framer-motion";

export const BaseNode = ({
  id,
  data,
  title,
  children,
  inputs = [],
  outputs = [],
  type,
}) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (data && typeof data.onRemove === "function") {
      data.onRemove(id);
    } else {
      console.error("onRemove is not available", { id, data });
    }
  };

  return (
    <motion.div
      className={`node-container ${type}-node`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="node-header">
        <span>{title}</span>
        <button
          className="node-remove-btn"
          onClick={handleRemove}
          type="button"
          aria-label="Remove node"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(231, 76, 60, 0.9)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <motion.div
          key={`input-${index}`}
          className="handle-wrapper input-wrapper"
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
          // whileHover={{ scale: 1.2 }}
        >
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${input.id}`}
            className="handle input-handle"
          />
          <div className="handle-direction-indicator input-indicator">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M19  12H5M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      ))}

      <div className="node-content">{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <motion.div
          key={`output-${index}`}
          className="handle-wrapper output-wrapper"
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
          // whileHover={{ scale: 1.2 }}
        >
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${output.id}`}
            className="handle output-handle"
          />
          <div className="handle-direction-indicator output-indicator">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}