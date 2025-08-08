import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, updateNodeHandles, NODE_TYPES } from './nodeFactory';

const TextNode = ({ id, data, selected }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);

  // Extract variables from text ({{variableName}} pattern)
  useEffect(() => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const foundVariables = [];
    let match;

    while ((match = variableRegex.exec(text)) !== null) {
      const variableName = match[1].trim();
      if (!foundVariables.find(v => v.name === variableName)) {
        foundVariables.push({
          id: `var-${variableName}`,
          name: variableName,
          label: variableName
        });
      }
    }

    setVariables(foundVariables);
  }, [text]);

  // Create base node configuration
  const baseConfig = createNodeConfig(NODE_TYPES.TEXT, {
    title: 'Text',
    width: Math.max(250, text.length * 8 + 50),
    height: Math.max(100, Math.ceil(text.length / 30) * 20 + 80)
  });

  // Update configuration with dynamic inputs for variables
  const nodeConfig = updateNodeHandles(baseConfig, {
    dynamicInputs: variables
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
          Text:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text... Use {{variableName}} for variables"
          style={{
            width: '100%',
            minHeight: '60px',
            padding: '6px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            resize: 'vertical',
            fontFamily: 'monospace'
          }}
          rows={Math.max(3, Math.ceil(text.length / 30))}
        />
        
        {variables.length > 0 && (
          <div style={{ marginTop: '8px', fontSize: '10px', color: '#666' }}>
            Variables: {variables.map(v => v.name).join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
};

export default TextNode;