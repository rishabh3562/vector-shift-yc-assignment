/**
 * Handles drag start event for draggable nodes
 * @param {DragEvent} event - The drag event
 * @param {string} nodeType - The type of node being dragged
 */
export const handleDragStart = (event, nodeType) => {
  const appData = { nodeType };
  event.target.style.cursor = 'grabbing';
  event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
  event.dataTransfer.effectAllowed = 'move';
};

/**
 * Handles drag end event
 * @param {DragEvent} event - The drag event
 */
export const handleDragEnd = (event) => {
  event.target.style.cursor = 'grab';
};

/**
 * Handles drag over event for drop zone
 * @param {DragEvent} event - The drag event
 */
export const handleDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

/**
 * Processes drop data and returns parsed node type
 * @param {DragEvent} event - The drop event
 * @returns {string|null} The node type or null if invalid
 */
export const processDropData = (event) => {
  const appData = event.dataTransfer.getData('application/reactflow');
  
  if (!appData) return null;
  
  try {
    const parsedData = JSON.parse(appData);
    return parsedData?.nodeType || null;
  } catch (error) {
    console.error('Error processing drop data:', error);
    return null;
  }
};