// server.js — root of repo
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from /public if needed
app.use(express.static("public"));

// Health check route
app.get("/", (_, res) => {
  res.send("📘 Character App Backend is Running");
});

app.listen(PORT, () =>
  console.log(`🚀  Server live → http://localhost:${PORT}/`)
);
