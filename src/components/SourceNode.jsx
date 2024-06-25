import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import { Handle, Position } from 'reactflow'

const SourceNode = ({data}) => {
  return (
    <div className="bg-white h-20 w-40 rounded-lg  flex gap-3 border p-1 border-black">
      <div className="w-4 bg-gray-300 flex items-center justify-center">
      <ArrowForward fontSize='small'/>
      </div>
    <div className="flex flex-col flex-grow">
        <h3 className="-mt-1 font-bold">{data.title}</h3>
        <h5 className="mt-auto ml-auto">Source</h5>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="bg-lime-400 -right-[0.4rem] h-8 w-1 rounded-none outline-none border-none"
      />
    </div>
   
   
  )
}

export default SourceNode
