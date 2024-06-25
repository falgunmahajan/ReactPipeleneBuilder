import { Close } from "@mui/icons-material";
import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY,sourcePosition,targetPosition }) => {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });
  const handleEdgeDelete = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge?.id !== id));
  };
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <button className="absolute nodrag  nopan"
          style={{
            transform: `translate(-50%, -55%) translate(${labelX}px,${labelY}px)`,
            pointerEvents:"all"
          }}
        onClick={handleEdgeDelete}>
          <Close color="error" />
        </button>
      </EdgeLabelRenderer>
    </>
  );
};
export default CustomEdge;
