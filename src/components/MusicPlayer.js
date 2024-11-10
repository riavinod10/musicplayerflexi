jsx
// src/components/MusicPlayer.js
import React, { useState } from "react";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/dQw4w9WgXcQ${playing ? "?autoplay=1" : ""}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MusicPlayer;