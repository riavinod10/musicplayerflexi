jsx
// src/pages/HomePage.js
import React from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h2>Welcome to Music App</h2>
        <Grid />
      </div>
    </div>
  );
};

export default HomePage;