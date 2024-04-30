import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express with TypeScript!");
});

const port = process.env.PORT || 3000; // Use environment variable or default port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
