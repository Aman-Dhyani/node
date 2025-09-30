// index.js
const express = require("express");
require("dotenv")
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for "/"
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));