// API Configuration
export const API_BASE_URL = 'http://localhost:8000';

export const API_ENDPOINTS = {
  PARSE_PIPELINE: '/pipelines/parse',
};

export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;