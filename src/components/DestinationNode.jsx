import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { Handle, Position } from 'reactflow'

const DestinationNode = ({data}) => {
  return (
    <div className="bg-white flex">
   
        <div className="flex flex-col flex-grow">
        <h3 className="-mt-1 font-bold">{data.title}</h3>
        <h5 className="mt-auto ml-auto">Source</h5>
      </div>
      <div className="h-full bg-gray-300 flex items-center"><ArrowBack/></div>
      <Handle
        type="target"
        position={Position.Left}
        className="bg-lime-400 -right-[0.4rem] h-8 w-1 rounded-none outline-none border-none"
      />
    </div>
  )
}

export default DestinationNode
