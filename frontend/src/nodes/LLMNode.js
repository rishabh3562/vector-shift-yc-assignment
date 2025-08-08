import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const LLMNode = ({ id, data, selected }) => {
  const [model, setModel] = useState(data?.model || 'gpt-3.5-turbo');
  const [temperature, setTemperature] = useState(data?.temperature || 0.7);
  const [maxTokens, setMaxTokens] = useState(data?.maxTokens || 150);

  const nodeConfig = createNodeConfig(NODE_TYPES.LLM, {
    title: 'LLM',
    height: 140
  });

  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      nodeConfig={nodeConfig}
    >
      <div>
        <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', color: '#666' }}>
          Model:
        </label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={{
            width: '100%',
            padding: '2px',
            border: '1px solid #ddd',
            borderRadius: '3px',
            fontSize: '10px',
            marginBottom: '4px'
          }}
        >
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="gpt-4">GPT-4</option>
          <option value="claude-2">Claude-2</option>
        </select>
        
        <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '9px', color: '#666' }}>Temp:</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              min="0"
              max="2"
              step="0.1"
              style={{
                width: '100%',
                padding: '2px',
                border: '1px solid #ddd',
                borderRadius: '3px',
                fontSize: '9px'
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontSize: '9px', color: '#666' }}>Tokens:</label>
            <input
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(parseInt(e.target.value))}
              min="1"
              max="4000"
              style={{
                width: '100%',
                padding: '2px',
                border: '1px solid #ddd',
                borderRadius: '3px',
                fontSize: '9px'
              }}
            />
          </div>
        </div>
      </div>
    </BaseNode>
  );
};

export default LLMNode;