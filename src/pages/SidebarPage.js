jsx
// src/pages/SidebarPage.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SidebarPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content" style={{ marginTop: "80px", paddingLeft: "220px" }}>
        <h2>Fixed Sidebar</h2>
        <Sidebar />
        <div style={{ marginLeft: "250px", padding: "20px" }}>
          <p>This page has a fixed sidebar on the left with content next to it.</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;