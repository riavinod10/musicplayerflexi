jsx
// src/pages/GridPage.js
import React from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";

const GridPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content" style={{ marginTop: "80px", padding: "20px" }}>
        <h2>Grid of Items</h2>
        <Grid />
      </div>
    </div>
  );
};

export default GridPage;