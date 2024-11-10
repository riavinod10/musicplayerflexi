jsx
// src/pages/MusicPage.js
import React from "react";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

const MusicPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content" style={{ marginTop: "80px", padding: "20px" }}>
        <h2>Music Player</h2>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default MusicPage;