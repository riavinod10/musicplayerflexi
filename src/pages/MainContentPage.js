jsx
// src/pages/MainContentPage.js
import React from "react";
import Navbar from "../components/Navbar";

const MainContentPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content" style={{ marginTop: "80px", padding: "20px" }}>
        <h2>Main Content Area</h2>
        <p>This is the main content area where you can add anything you want, such as text, images, or videos.</p>
        <p>Here you can explain your app or website in detail, or add other interactive elements.</p>
      </div>
    </div>
  );
};

export default MainContentPage;