jsx
// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div style={{ position: "fixed", top: "0", left: "0", width: "20%", height: "100vh", backgroundColor: "#343a40", color: "white", paddingTop: "56px", overflowY: "auto", zIndex: 1 }}>
      <img src="./pexels-googledeepmind-18069157.jpg" alt="Sidebar Image" style={{ width: "90%", height: "auto", display: "block", margin: "40px auto 10px" }} />
      <div style={{ padding: "15px" }}>
        <h5>Sidebar Content</h5>
        <p>This sidebar covers 20% width and is fixed when scrolling.</p>
      </div>
    </div>
  );
};

export default Sidebar;
