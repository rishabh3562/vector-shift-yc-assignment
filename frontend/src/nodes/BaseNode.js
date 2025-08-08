import React from 'react';
import { Handle, Position } from 'reactflow';

/**
 * BaseNode - Abstract base component for all node types
 * Provides common functionality and structure for all nodes
 */
const BaseNode = ({ 
  id, 
  data, 
  selected,
  nodeConfig,
  children,
  className = '',
  style = {}
}) => {
  const {
    title,
    inputs = [],
    outputs = [],
    width = 200,
    height = 'auto',
    backgroundColor = '#ffffff',
    borderColor = '#ddd',
    titleColor = '#333'
  } = nodeConfig;

  const baseStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    border: `2px solid ${selected ? '#0066cc' : borderColor}`,
    borderRadius: '8px',
    padding: '12px',
    fontSize: '12px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: selected ? '0 4px 12px rgba(0, 102, 204, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    ...style
  };

  const titleStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: titleColor,
    marginBottom: '8px',
    textAlign: 'center'
  };

  const renderHandle = (handle, index) => {
    const isInput = handle.type === 'target';
    const position = isInput ? Position.Left : Position.Right;
    
    return (
      <Handle
        key={`${handle.type}-${handle.id || index}`}
        type={handle.type}
        position={position}
        id={handle.id || `${handle.type}-${index}`}
        style={{
          top: handle.top || 'auto',
          backgroundColor: handle.color || '#555',
          width: '10px',
          height: '10px',
          border: '2px solid #fff',
          ...handle.style
        }}
        title={handle.label || ''}
      />
    );
  };

  return (
    <div className={`base-node ${className}`} style={baseStyle}>
      {/* Render input handles */}
      {inputs.map((input, index) => renderHandle({ ...input, type: 'target' }, index))}
      
      {/* Render output handles */}
      {outputs.map((output, index) => renderHandle({ ...output, type: 'source' }, index))}
      
      {/* Node title */}
      {title && <div style={titleStyle}>{title}</div>}
      
      {/* Node content */}
      <div className="node-content">
        {children}
      </div>
    </div>
  );
};

export default BaseNode;