import React, { useCallback, useContext } from "react";
import { AppContext } from "./ContextProvider";
import ReactFlow, { Background, Controls, addEdge } from "reactflow";
import { edgeType, nodeType } from "../utils/InitialData.js";

const ReactFlowComponent = () => {
  const { nodes, edges,setEdges, onNodesChange, onEdgesChange } = useContext(AppContext);
  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection,animated:"true", type: 'customEdge' };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );
  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeType}
      edges={edges}
      edgeTypes={edgeType}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background variant="dots" />
      <Controls />
    </ReactFlow>
  );
};

export default ReactFlowComponent;
