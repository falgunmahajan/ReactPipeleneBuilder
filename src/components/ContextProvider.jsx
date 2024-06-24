
import React, { createContext } from 'react'
import { useEdgesState, useNodesState } from 'reactflow';
import { initialNodes } from '../utils/InitialData.js';
import { initialEdges } from '../utils/InitialData.js';

export const AppContext = createContext()
const ContextProvider = ({children}) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  return (
   <AppContext.Provider value={{nodes, setNodes, onNodesChange,edges, setEdges, onEdgesChange}}>
    {children}
   </AppContext.Provider>
  )
}

export default ContextProvider
