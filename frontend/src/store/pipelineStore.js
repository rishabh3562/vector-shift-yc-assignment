import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

// Separate slice for node-related state and actions
const createNodeSlice = (set, get) => ({
  nodes: [],
  nodeIDs: {},
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    newIDs[type] = (newIDs[type] || 0) + 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) =>
    set((state) => ({
      nodes: [...state.nodes, node],
    })),
  removeNode: (nodeId) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    })),
  onNodesChange: (changes) =>
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    })),
  updateNodeField: (nodeId, fieldName, fieldValue) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, [fieldName]: fieldValue } }
          : node
      ),
    })),
});

// Separate slice for edge-related state and actions
const createEdgeSlice = (set) => ({
  edges: [],
  onEdgesChange: (changes) =>
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    })),
  onConnect: (connection) =>
    set((state) => ({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            height: "20px",
            width: "20px",
          },
        },
        state.edges
      ),
    })),
});

// UI slice for toolbar and other UI state
const createUISlice = (set) => ({
  toolbarStyle: 'sidebar', // 'sidebar' | 'floating'
  setToolbarStyle: (style) => set({ toolbarStyle: style }),
  toggleToolbarStyle: () =>
    set((state) => ({
      toolbarStyle: state.toolbarStyle === 'sidebar' ? 'floating' : 'sidebar',
    })),
});

// Create the store
const useStore = create((set, get) => ({
  ...createNodeSlice(set, get),
  ...createEdgeSlice(set),
  ...createUISlice(set),
}));

// Selectors
const useNodes = () => useStore((state) => state.nodes);
const useEdges = () => useStore((state) => state.edges);
const useToolbarStyle = () => useStore((state) => state.toolbarStyle);
const useStoreActions = () => useStore((state) => ({
  addNode: state.addNode,
  removeNode: state.removeNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  updateNodeField: state.updateNodeField,
  getNodeID: state.getNodeID,
}));
const useUIActions = () => useStore((state) => ({
  setToolbarStyle: state.setToolbarStyle,
  toggleToolbarStyle: state.toggleToolbarStyle,
}));

// Export everything at the end
export {
  useStore,
  useNodes,
  useEdges,
  useToolbarStyle,
  useStoreActions,
  useUIActions
};