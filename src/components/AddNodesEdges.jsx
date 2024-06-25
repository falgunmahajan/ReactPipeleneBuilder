import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";

const AddNodesEdges = () => {
  const {setNodes}=useContext(AppContext);
  const getYPosition =()=> Math.floor(Math.random()*500);
  const addSourceNode = () => {
   
    setNodes((nds) => [
      ...nds,
      {
        id: `${nds.length + 1}`,
        position: { x: 200, y:getYPosition()},
        data: { title: `Source ${nds.filter(item=>item.type==="sourceNode").length+1}` },
        type: "sourceNode",
      },
    ]);
  };
const addDestinationNode=()=>{

  setNodes((nds) => [
    ...nds,
    {
      id:  `${nds.length + 1}`,
      position: { x: 1500, y:getYPosition()},
      data: { title: `Destination ${nds.filter(item=>item.type==="destinationNode").length + 1}` },
      type: "destinationNode",
  },
  ]);
}
  return (
    <div className="fixed mx-auto w-full z-20 flex items-center justify-center gap-8 p-5  ">
      <button
        onClick={addSourceNode}
        className="bg-red-600 text-white font-bolder  rounded-md p-3"
      >
        Add Source
      </button>
      <button
        onClick={addDestinationNode}
        className="bg-red-600 text-white font-bolder rounded-md p-3"
      >
        Add Destination
      </button>
    </div>
  );
};

export default AddNodesEdges;
