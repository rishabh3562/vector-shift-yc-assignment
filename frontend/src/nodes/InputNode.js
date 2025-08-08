import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const InputNode = ({ id, data, selected }) => {
  const [inputName, setInputName] = useState(data?.inputName || 'input');
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const nodeConfig = createNodeConfig(NODE_TYPES.INPUT, {
    title: 'Input'
  });

  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      nodeConfig={nodeConfig}
    >
      <div>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', color: '#666' }}>
          Name:
        </label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '8px'
          }}
        />
        
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', color: '#666' }}>
          Type:
        </label>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
          <option value="Number">Number</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default InputNode;