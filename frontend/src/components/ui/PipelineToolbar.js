import { DraggableNode } from "./DraggableNode";
import { NODE_TYPES, NODE_LABELS } from "../../constants/nodeTypes";

export const PipelineToolbar = () => {
  const nodeTypeEntries = Object.entries(NODE_TYPES);

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {nodeTypeEntries.map(([key, type]) => (
          <DraggableNode 
            key={type}
            type={type} 
            label={NODE_LABELS[type]} 
          />
        ))}
      </div>
    </div>
  );
};