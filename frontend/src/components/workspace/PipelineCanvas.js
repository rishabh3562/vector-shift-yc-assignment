import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "../../store/pipelineStore";
import { nodeTypes } from "./nodeTypes";
import { GRID_SIZE } from "../../constants/ui";
import { handleDragOver, processDropData } from "../../utils/dragAndDrop";
import { createNode } from "../../utils/nodeHelpers";
import "reactflow/dist/style.css";

const proOptions = { hideAttribution: true };

export const PipelineCanvas = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
  // Get store values and actions
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const onConnect = useStore((state) => state.onConnect);
  const addNode = useStore((state) => state.addNode);
  const getNodeID = useStore((state) => state.getNodeID);
  const handleRemoveNode = useStore((state) => state.removeNode);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = processDropData(event);
      
      if (!type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);
      const newNode = createNode(nodeID, type, position, handleRemoveNode);

      addNode(newNode);
    },
    [reactFlowInstance, addNode, getNodeID, handleRemoveNode]
  );

  return (
    <div ref={reactFlowWrapper} style={{ width: "100wv", height: "70vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={handleDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[GRID_SIZE, GRID_SIZE]}
        connectionLineType="smoothstep"
        fitView
      >
        <Background color="#aaa" gap={GRID_SIZE} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};