import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Handle, Position } from "reactflow";

const DestinationNode = ({ data }) => {
  return (
    <div className="bg-white h-20 w-40 rounded-lg  flex gap-3 border p-1 border-black">
      <div className="flex flex-col flex-grow">
        <h3 className="-mt-1 font-bold ml-auto">{data.title}</h3>
        <h5 className="mt-auto ">Destination</h5>
      </div>
      <div className="w-4 bg-gray-300 flex items-center justify-center">
        <ArrowBack fontSize="small"/>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="bg-lime-400 h-8 w-1 -right-[0.4rem] rounded-none outline-none border-none"
      />
    </div>
  );
};

export default DestinationNode;
