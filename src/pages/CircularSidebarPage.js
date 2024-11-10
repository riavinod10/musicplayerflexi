jsx
// src/pages/CircularSidebarPage.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CircularSidebarPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content" style={{ marginTop: "80px", paddingLeft: "220px" }}>
        <h2>Circular Sidebar</h2>
        <div className="circular-sidebar" style={{ position: "fixed", top: "80px", left: "10px", width: "200px", height: "200px", backgroundColor: "#343a40", color: "white", borderRadius: "50%", textAlign: "center", paddingTop: "20px", overflowY: "auto" }}>
          <img src="./pexels-googledeepmind-18069157.jpg" alt="Sidebar Image" style={{ width: "90%", height: "auto", display: "block", margin: "40px auto 10px" }} />
          <div style={{ padding: "10px" }}>
            <h5>Sidebar Content</h5>
            <p>This sidebar is circular and fixed to the left of the screen.</p>
          </div>
        </div>
        <div style={{ marginLeft: "250px", padding: "20px" }}>
          <p>This page features a circular sidebar that stays fixed as you scroll.</p>
        </div>
      </div>
    </div>
  );
};

export default CircularSidebarPage;