import CustomEdge from "../components/CustomEdge";
import DestinationNode from "../components/DestinationNode";
import SourceNode from "../components/SourceNode";

export const initialNodes = [
    {
        id: "1",
        position: { x: 200, y: 100 },
        data: { title: "Source 1" },
        type: "sourceNode",
    },
    {
        id: "2",
        position: { x: 200, y: 200 },
        data: { title: "Source 2" },
        type: "sourceNode",
    },
    {
        id: "3",
        position: { x: 200, y: 300 },
        data: { title: "Source 3" },
        type: "sourceNode",
    },
    {
        id: "4",
        position: { x: 1500, y: 100 },
        data: { title: "Destinaton 1" },
        type: "destinationNode",
    },
    {
        id: "5",
        position: { x: 1500, y: 400 },
        data: { title: "Destinaton 2" },
        type: "destinationNode",
    },
];

export const initialEdges = [
    { id: '1->4', type: 'customEdge', source: '1', target: '4',animated:"true" },
    { id: '2->4', type: 'customEdge', source: '2', target: '4',animated:"true" },
    { id: '3->4', type: 'customEdge', source: '3', target: '4',animated:"true" },
    { id: '3->5', type: 'customEdge', source: '3', target: '5',animated:"true" },
  ];;

export const nodeType={
    "sourceNode":SourceNode,
    "destinationNode":DestinationNode
}
export const edgeType={
        'customEdge': CustomEdge
      
}