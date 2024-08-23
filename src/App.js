import {
  ReactFlow,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  Panel,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import { useCallback, useState } from "react";

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const [variant, setVariant] = useState("dots");

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((edgs) => applyEdgeChanges(changes, edgs)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges((edgs) => addEdge(params, edgs)),
    []
  );

  const nodeColor = (node) => {
    switch (node.type) {
      case "input":
        return "red";
      case "output":
        return "blue";
      default:
        return "";
    }
  };

  return (
    <div className="app">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Panel position="top-right">
          <button onClick={() => setVariant("dots")}>Dots</button>
          <button onClick={() => setVariant("lines")}>Lines</button>
          <button onClick={() => setVariant("cross")}>Cross</button>
        </Panel>
        <Controls />
        <Background variant={variant} />
        <MiniMap nodeColor={nodeColor} pannable />
      </ReactFlow>
    </div>
  );
}
