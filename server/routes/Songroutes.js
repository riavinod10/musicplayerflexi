// backend/routes/songRoutes.js
const express = require("express");
const Song = require("../models/song");

const router = express.Router();

// Get all songs
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching songs", error });
  }
});

// Add a new song
router.post("/", async (req, res) => {
  try {
    const { title, artist, url, lyrics } = req.body;
    const newSong = new Song({ title, artist, url, lyrics });
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: "Error adding song", error });
  }
});

module.exports = router;
