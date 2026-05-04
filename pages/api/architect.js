export default function handler(req, res) {
  res.status(200).json({
    name: "MCP",
    version: "2025-06-18",
    tools: ["chat", "Agent"],
    status: "working"
  });
}
