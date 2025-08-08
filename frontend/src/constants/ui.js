// UI Constants
export const GRID_SIZE = 20;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const TUTORIAL_STEPS = [
  {
    title: "Welcome to Pipeline Builder!",
    content: "Let's walk through how to create your first pipeline.",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    title: "Adding Nodes",
    content: "Drag nodes from the left toolbar into the workspace.",
    position: { top: "20%", left: "200px", transform: "translateY(-50%)" },
  },
  {
    title: "Connecting Nodes",
    content: "Click and drag from one handle to another to connect nodes.",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    title: "Node Configuration",
    content: "Click on any node to configure its settings.",
    position: { top: "30%", right: "200px", transform: "translateY(-50%)" },
  },
  {
    title: "Submitting Pipeline",
    content: "Click the Submit button to validate your pipeline.",
    position: { bottom: "100px", right: "100px" },
  },
];

export const TOAST_CONFIG = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};