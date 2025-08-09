import { COLORS } from './theme';

// UI Constants
export const GRID_SIZE = 20;

export { THEMES } from './theme';

export const TUTORIAL_STEPS = [
  {
    title: "Welcome to Pipeline Builder!",
    content: "Let's walk through how to create your first data processing pipeline in just a few simple steps.",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    title: "Open the Node Panel",
    content: "Click the + button in the top-left corner to open the node panel and see all available components.",
    position: { top: "80px", left: "80px", transform: "translateY(10px)" },
  },
  {
    title: "Add Your First Node",
    content: "Drag any node from the sidebar into the canvas. Start with an Input node to begin your pipeline.",
    position: { top: "50%", left: "400px", transform: "translateY(-50%)" },
  },
  {
    title: "Connect Nodes Together",
    content: "Click and drag from the circular handle on the right of one node to the handle on the left of another to create connections.",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    title: "Configure Your Nodes",
    content: "Click on any node to see its configuration options. Each node type has different settings you can customize.",
    position: { top: "30%", right: "200px", transform: "translateY(-50%)" },
  },
  {
    title: "Submit Your Pipeline",
    content: "When you're ready, click the 'Submit Pipeline' button in the bottom-right to validate and analyze your creation.",
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