// Theme Constants
export const COLORS = {
  // Primary violet/purple palette
  PRIMARY: '#b089f6',
  SECONDARY: '#5809d8', 
  TERTIARY: '#2f0676',
  
  // Derived colors
  PRIMARY_LIGHT: '#c9a8f7',
  PRIMARY_DARK: '#9b6ff5',
  SECONDARY_LIGHT: '#7a2de0',
  SECONDARY_DARK: '#4a07b8',
  TERTIARY_LIGHT: '#4a0a9e',
  TERTIARY_DARK: '#1f0450',
  
  // Neutral colors
  WHITE: '#ffffff',
  BLACK: '#000000',
  GRAY_LIGHT: '#f8f9fa',
  GRAY: '#6c757d',
  GRAY_DARK: '#343a40',
  
  // Status colors
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  ERROR: '#dc3545',
  INFO: '#17a2b8',
  
  // Background colors
  BG_LIGHT: '#faf9ff',
  BG_DARK: '#0f0a1f',
  BG_CARD_LIGHT: '#ffffff',
  BG_CARD_DARK: '#1a1332',
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const THEME_CONFIG = {
  [THEMES.LIGHT]: {
    background: COLORS.BG_LIGHT,
    cardBackground: COLORS.BG_CARD_LIGHT,
    text: COLORS.TERTIARY,
    textSecondary: COLORS.GRAY,
    border: COLORS.PRIMARY_LIGHT,
    accent: COLORS.PRIMARY,
  },
  [THEMES.DARK]: {
    background: COLORS.BG_DARK,
    cardBackground: COLORS.BG_CARD_DARK,
    text: COLORS.WHITE,
    textSecondary: COLORS.GRAY_LIGHT,
    border: COLORS.SECONDARY,
    accent: COLORS.PRIMARY,
  },
};