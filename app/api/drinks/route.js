export function GET(_req, res) {
  res
    .status(200)
    .json(
      { id: 160890, name: "Mark", message: "GET request successful" },
      { Headers: { "content-type": "application/json" } }
    );
}
