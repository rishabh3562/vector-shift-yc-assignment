import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const OutputNode = ({ id, data, selected }) => {
  const [outputName, setOutputName] = useState(data?.outputName || 'output');
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const nodeConfig = createNodeConfig(NODE_TYPES.OUTPUT, {
    title: 'Output'
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
          value={outputName}
          onChange={(e) => setOutputName(e.target.value)}
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
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
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
          <option value="Image">Image</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default OutputNode;