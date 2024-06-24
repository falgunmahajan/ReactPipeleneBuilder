import React, { useContext } from 'react'
import { AppContext } from './ContextProvider'
import ReactFlow, { Background, Controls } from 'reactflow'
import { nodeType } from '../utils/InitialData.js'

const ReactFlowComponent = () => {
    const {nodes}=useContext(AppContext)
  return (
    <ReactFlow nodes={nodes} nodeTypes={nodeType}>
    <Background variant='dots'/>
    <Controls/>
   </ReactFlow>
  )
}

export default ReactFlowComponent
