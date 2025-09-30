const express = require("express");
require("dotenv").config(); // optional for local env

const app = express();

// Use env PORT if available, fallback to 3000 for local dev
const PORT = process.env.PORT || 3000;

// Middleware example
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Hello World"));

// Listen on 0.0.0.0 for container access
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
