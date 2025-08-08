import React, { useState, useEffect } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, updateNodeHandles, NODE_TYPES } from './nodeFactory';

const TemplateNode = ({ id, data, selected }) => {
  const [template, setTemplate] = useState(data?.template || '');
  const [templateEngine, setTemplateEngine] = useState(data?.templateEngine || 'handlebars');
  const [variables, setVariables] = useState([]);

  // Extract variables from template
  useEffect(() => {
    let variableRegex;
    
    switch (templateEngine) {
      case 'handlebars':
        variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
        break;
      case 'mustache':
        variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
        break;
      case 'jinja':
        variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
        break;
      default:
        variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    }

    const foundVariables = [];
    let match;

    while ((match = variableRegex.exec(template)) !== null) {
      const variableName = match[1].trim();
      if (!foundVariables.find(v => v.name === variableName)) {
        foundVariables.push({
          id: `template-var-${variableName}`,
          name: variableName,
          label: variableName
        });
      }
    }

    setVariables(foundVariables);
  }, [template, templateEngine]);

  // Create base node configuration
  const baseConfig = createNodeConfig(NODE_TYPES.TEMPLATE, {
    title: 'Template',
    width: Math.max(220, template.length * 6 + 50),
    height: Math.max(120, Math.ceil(template.length / 25) * 20 + 100)
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
          Engine:
        </label>
        <select
          value={templateEngine}
          onChange={(e) => setTemplateEngine(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '6px'
          }}
        >
          <option value="handlebars">Handlebars</option>
          <option value="mustache">Mustache</option>
          <option value="jinja">Jinja2</option>
        </select>
        
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', color: '#666' }}>
          Template:
        </label>
        <textarea
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="Hello {{name}}! Welcome to {{app}}."
          style={{
            width: '100%',
            minHeight: '50px',
            padding: '6px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            resize: 'vertical',
            fontFamily: 'monospace'
          }}
          rows={Math.max(2, Math.ceil(template.length / 25))}
        />
        
        {variables.length > 0 && (
          <div style={{ marginTop: '6px', fontSize: '10px', color: '#666' }}>
            Variables: {variables.map(v => v.name).join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
};

export default TemplateNode;