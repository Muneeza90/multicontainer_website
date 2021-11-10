// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "The new world, new life!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});