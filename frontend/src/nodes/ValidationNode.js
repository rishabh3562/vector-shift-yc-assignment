import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const ValidationNode = ({ id, data, selected }) => {
  const [validationType, setValidationType] = useState(data?.validationType || 'required');
  const [validationRule, setValidationRule] = useState(data?.validationRule || '');
  const [errorMessage, setErrorMessage] = useState(data?.errorMessage || 'Validation failed');

  const nodeConfig = createNodeConfig(NODE_TYPES.VALIDATION, {
    title: 'Validation',
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
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', color: '#666' }}>
          Validation:
        </label>
        <select
          value={validationType}
          onChange={(e) => setValidationType(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '6px'
          }}
        >
          <option value="required">Required</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="minLength">Min Length</option>
          <option value="maxLength">Max Length</option>
          <option value="regex">Regex Pattern</option>
        </select>
        
        {['minLength', 'maxLength', 'regex'].includes(validationType) && (
          <input
            type="text"
            value={validationRule}
            onChange={(e) => setValidationRule(e.target.value)}
            placeholder={validationType === 'regex' ? 'Pattern' : 'Value'}
            style={{
              width: '100%',
              padding: '4px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '11px',
              marginBottom: '6px'
            }}
          />
        )}
        
        <input
          type="text"
          value={errorMessage}
          onChange={(e) => setErrorMessage(e.target.value)}
          placeholder="Error message"
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px'
          }}
        />
      </div>
    </BaseNode>
  );
};

export default ValidationNode;