// index.js
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for "/"
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});