import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

export default function MindMap() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/opinions");
      const data = await res.json();

      const nodes = [];
      const links = [];
      const brandSet = new Set();

      data.forEach((entry, idx) => {
        const brand = entry.brand.trim();
        const opinion = entry.opinion.trim();

        if (!brandSet.has(brand)) {
          nodes.push({ id: brand, group: "brand", color: "#6366f1" }); // Indigo
          brandSet.add(brand);
        }

        const opinionId = `opinion-${idx}`;
        nodes.push({ id: opinionId, name: opinion, group: "opinion", color: "#4ade80" }); // Green
        links.push({ source: brand, target: opinionId });
      });

      setGraphData({ nodes, links });
    };

    // Fetch immediately
    fetchData();

    // Then fetch every 5 seconds
    const interval = setInterval(fetchData, 5000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[75vh] border shadow rounded overflow-hidden mt-4">
      <ForceGraph2D
        graphData={graphData}
        nodeLabel={(node) => node.name || node.id}
        nodeAutoColorBy="group"
        linkColor={() => "#aaa"}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name || node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Inter`;
          ctx.fillStyle = node.color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.fillStyle = "#333";
          ctx.textAlign = "center";
          ctx.fillText(label, node.x, node.y + 12);
        }}
      />
    </div>
  );
}
