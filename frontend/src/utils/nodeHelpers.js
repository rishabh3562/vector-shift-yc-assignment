/**
 * Extracts variables from text using double curly bracket syntax
 * @param {string} text - The text to parse
 * @returns {string[]} Array of unique variable names
 */
export const extractVariables = (text) => {
  const matches = text.match(/\{\{([^}]+)\}\}/g) || [];
  const vars = matches.map((match) => match.slice(2, -2).trim());
  return [...new Set(vars)];
};

/**
 * Generates initial node data
 * @param {string} nodeID - The node ID
 * @param {string} type - The node type
 * @returns {object} Initial node data
 */
export const getInitNodeData = (nodeID, type) => {
  return { 
    id: nodeID, 
    nodeType: type 
  };
};

/**
 * Creates a new node object
 * @param {string} nodeID - The node ID
 * @param {string} type - The node type
 * @param {object} position - The node position
 * @param {function} onRemove - The remove handler
 * @returns {object} New node object
 */
export const createNode = (nodeID, type, position, onRemove) => {
  return {
    id: nodeID,
    type,
    position,
    data: {
      ...getInitNodeData(nodeID, type),
      onRemove,
    },
  };
};