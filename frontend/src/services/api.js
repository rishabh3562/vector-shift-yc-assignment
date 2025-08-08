import { getApiUrl, API_ENDPOINTS } from '../config/api';

/**
 * Submits pipeline data to the backend for validation
 * @param {object} pipelineData - Object containing nodes and edges
 * @returns {Promise<object>} API response data
 */
export const submitPipeline = async (pipelineData) => {
  const response = await fetch(getApiUrl(API_ENDPOINTS.PARSE_PIPELINE), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `pipeline=${encodeURIComponent(JSON.stringify(pipelineData))}`,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || 'Failed to submit pipeline');
  }

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};