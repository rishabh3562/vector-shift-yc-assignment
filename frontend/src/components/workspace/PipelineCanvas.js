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
  //correct
  const onDrop = useCallback(

    (event) => {
      event.preventDefault();
      console.log("[PipelineCanvas,useCallback] event:", event)
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = processDropData(event);

      if (!type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);
      const newNode = createNode(nodeID, type, position, handleRemoveNode);
      console.log("[PipelineCanvas] type:", type)
      console.log("[PipelineCanvas] nodeID:", nodeID)
      console.log("[PipelineCanvas] newNode:", newNode)
      addNode(newNode);
    },
    [reactFlowInstance, addNode, getNodeID, handleRemoveNode]
  );

  return (
    <div
      ref={reactFlowWrapper}
      style={{ width: "100vw", height: "100vh", backgroundColor: "var(--bg-color)" }}
      onDragOver={handleDragOver}
      onDrop={onDrop}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[GRID_SIZE, GRID_SIZE]}
        connectionLineType="smoothstep"
        fitView={false}          // disable auto-fit to allow free panning
        panOnDrag={true}         // enable dragging to pan
        minZoom={0.1}
        maxZoom={2}
        zoomOnScroll={true}
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <Background color="var(--border-color)" gap={GRID_SIZE} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>

  );
};