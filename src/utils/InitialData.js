import DestinationNode from "../components/DestinationNode";
import SourceNode from "../components/SourceNode";

export const initialNodes = [
    {
        id: "1",
        position: { x: -600, y: 100 },
        data: { title: "Source 1" },
        type: "sourceNode",
    },
    {
        id: "2",
        position: { x: -600, y: 200 },
        data: { title: "Source 2" },
        type: "sourceNode",
    },
    {
        id: "3",
        position: { x: -600, y: 300 },
        data: { title: "Source 3" },
        type: "sourceNode",
    },
    {
        id: "4",
        position: { x: 600, y: 100 },
        data: { title: "Destinaton 1" },
        type: "destinationNode",
    },
    {
        id: "5",
        position: { x: 600, y: 400 },
        data: { title: "Destinaton 2" },
        type: "destinationNode",
    },
];

export const initialEdges = [];

export const nodeType={
    "sourceNode":SourceNode,
    "destinationNode":DestinationNode
}