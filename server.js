import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.send("📘 Character App Backend is Running");
});

app.listen(PORT, () =>
  console.log(`🚀  Server live → http://localhost:${PORT}/`)
);
