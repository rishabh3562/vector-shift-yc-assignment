import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const TransformNode = ({ id, data, selected }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');
  const [customFunction, setCustomFunction] = useState(data?.customFunction || '');

  const nodeConfig = createNodeConfig(NODE_TYPES.TRANSFORM, {
    title: 'Transform',
    height: transformType === 'custom' ? 120 : 80
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
          Transform:
        </label>
        <select
          value={transformType}
          onChange={(e) => setTransformType(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '8px'
          }}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim Whitespace</option>
          <option value="reverse">Reverse</option>
          <option value="custom">Custom Function</option>
        </select>
        
        {transformType === 'custom' && (
          <textarea
            value={customFunction}
            onChange={(e) => setCustomFunction(e.target.value)}
            placeholder="function transform(input) { return input; }"
            style={{
              width: '100%',
              height: '40px',
              padding: '4px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '10px',
              fontFamily: 'monospace',
              resize: 'none'
            }}
          />
        )}
      </div>
    </BaseNode>
  );
};

export default TransformNode;