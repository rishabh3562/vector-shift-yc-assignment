/**
 * Node Factory - Centralized node configuration and creation
 * Manages node types, their configurations, and provides utilities for node management
 */

export const NODE_TYPES = {
  INPUT: 'input',
  OUTPUT: 'output',
  TEXT: 'text',
  LLM: 'llm',
  TRANSFORM: 'transform',
  MERGE: 'merge',
  FILTER: 'filter',
  VALIDATION: 'validation',
  TEMPLATE: 'template'
};

export const DEFAULT_NODE_CONFIGS = {
  [NODE_TYPES.INPUT]: {
    title: 'Input',
    inputs: [],
    outputs: [{ id: 'output', label: 'Output' }],
    backgroundColor: '#e8f5e8',
    borderColor: '#4caf50',
    titleColor: '#2e7d32'
  },
  
  [NODE_TYPES.OUTPUT]: {
    title: 'Output',
    inputs: [{ id: 'input', label: 'Input' }],
    outputs: [],
    backgroundColor: '#fff3e0',
    borderColor: '#ff9800',
    titleColor: '#e65100'
  },
  
  [NODE_TYPES.TEXT]: {
    title: 'Text',
    inputs: [],
    outputs: [{ id: 'output', label: 'Output' }],
    backgroundColor: '#f3e5f5',
    borderColor: '#9c27b0',
    titleColor: '#6a1b9a',
    width: 250,
    height: 'auto'
  },
  
  [NODE_TYPES.LLM]: {
    title: 'LLM',
    inputs: [
      { id: 'system', label: 'System', top: '25%' },
      { id: 'prompt', label: 'Prompt', top: '75%' }
    ],
    outputs: [{ id: 'response', label: 'Response' }],
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3',
    titleColor: '#0d47a1',
    width: 200,
    height: 120
  },
  
  [NODE_TYPES.TRANSFORM]: {
    title: 'Transform',
    inputs: [{ id: 'input', label: 'Input' }],
    outputs: [{ id: 'output', label: 'Output' }],
    backgroundColor: '#f1f8e9',
    borderColor: '#8bc34a',
    titleColor: '#33691e'
  },
  
  [NODE_TYPES.MERGE]: {
    title: 'Merge',
    inputs: [
      { id: 'input1', label: 'Input 1', top: '30%' },
      { id: 'input2', label: 'Input 2', top: '70%' }
    ],
    outputs: [{ id: 'output', label: 'Output' }],
    backgroundColor: '#fce4ec',
    borderColor: '#e91e63',
    titleColor: '#ad1457'
  },
  
  [NODE_TYPES.FILTER]: {
    title: 'Filter',
    inputs: [{ id: 'input', label: 'Input' }],
    outputs: [
      { id: 'passed', label: 'Passed', top: '30%' },
      { id: 'filtered', label: 'Filtered', top: '70%' }
    ],
    backgroundColor: '#fff8e1',
    borderColor: '#ffc107',
    titleColor: '#f57f17'
  },
  
  [NODE_TYPES.VALIDATION]: {
    title: 'Validation',
    inputs: [{ id: 'input', label: 'Input' }],
    outputs: [
      { id: 'valid', label: 'Valid', top: '30%' },
      { id: 'invalid', label: 'Invalid', top: '70%' }
    ],
    backgroundColor: '#ffebee',
    borderColor: '#f44336',
    titleColor: '#c62828'
  },
  
  [NODE_TYPES.TEMPLATE]: {
    title: 'Template',
    inputs: [{ id: 'template', label: 'Template' }],
    outputs: [{ id: 'output', label: 'Output' }],
    backgroundColor: '#f9fbe7',
    borderColor: '#cddc39',
    titleColor: '#827717',
    width: 220
  }
};

/**
 * Creates a new node configuration by merging default config with custom overrides
 */
export const createNodeConfig = (nodeType, customConfig = {}) => {
  const defaultConfig = DEFAULT_NODE_CONFIGS[nodeType] || DEFAULT_NODE_CONFIGS[NODE_TYPES.INPUT];
  
  return {
    ...defaultConfig,
    ...customConfig,
    inputs: customConfig.inputs || defaultConfig.inputs,
    outputs: customConfig.outputs || defaultConfig.outputs
  };
};

/**
 * Dynamically updates node handles based on data changes
 */
export const updateNodeHandles = (nodeConfig, nodeData) => {
  const updatedConfig = { ...nodeConfig };
  
  // Handle dynamic input creation (e.g., for text variables)
  if (nodeData.dynamicInputs) {
    updatedConfig.inputs = [
      ...(nodeConfig.inputs || []),
      ...nodeData.dynamicInputs.map((input, index) => ({
        id: input.id || `dynamic-${index}`,
        label: input.label || input.name,
        top: `${20 + (index * 30)}%`,
        color: '#666'
      }))
    ];
  }
  
  return updatedConfig;
};

/**
 * Validates node configuration
 */
export const validateNodeConfig = (config) => {
  const errors = [];
  
  if (!config.title) {
    errors.push('Node must have a title');
  }
  
  if (!Array.isArray(config.inputs)) {
    errors.push('Inputs must be an array');
  }
  
  if (!Array.isArray(config.outputs)) {
    errors.push('Outputs must be an array');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};