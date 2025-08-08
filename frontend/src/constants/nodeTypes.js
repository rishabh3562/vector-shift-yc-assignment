// Node type constants
export const NODE_TYPES = {
  INPUT: 'customInput',
  OUTPUT: 'customOutput',
  LLM: 'llm',
  TEXT: 'text',
  MERGE: 'merge',
  FILTER: 'filter',
  TEMPLATE: 'template',
  VALIDATION: 'validation',
  TRANSFORM: 'transform',
};

// Node labels for UI
export const NODE_LABELS = {
  [NODE_TYPES.INPUT]: 'Input',
  [NODE_TYPES.OUTPUT]: 'Output',
  [NODE_TYPES.LLM]: 'LLM',
  [NODE_TYPES.TEXT]: 'Text',
  [NODE_TYPES.MERGE]: 'Merge',
  [NODE_TYPES.FILTER]: 'Filter',
  [NODE_TYPES.TEMPLATE]: 'Template',
  [NODE_TYPES.VALIDATION]: 'Validation',
  [NODE_TYPES.TRANSFORM]: 'Transform',
};

// Transform options
export const TRANSFORM_OPTIONS = [
  { value: '', label: 'Select transform...' },
  { value: 'uppercase', label: 'To Uppercase' },
  { value: 'lowercase', label: 'To Lowercase' },
  { value: 'capitalize', label: 'Capitalize' },
  { value: 'trim', label: 'Trim' },
  { value: 'number', label: 'To Number' },
];

// Merge type options
export const MERGE_OPTIONS = [
  { value: 'concat', label: 'Concatenate' },
  { value: 'join', label: 'Join' },
  { value: 'zip', label: 'Zip' },
];

// Input/Output type options
export const IO_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'File' },
];

export const OUTPUT_TYPE_OPTIONS = [
  { value: 'Text', label: 'Text' },
  { value: 'File', label: 'Image' },
];