// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const moviesByMood = require("./moviesData");

app.use(cors());

app.get("/recommend/:mood", (req, res) => {
  const mood = req.params.mood.toLowerCase();
  const movies = moviesByMood[mood];

  if (!movies) {
    return res.status(404).json({ error: "Mood not found" });
  }

  res.json({ mood, movies });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





