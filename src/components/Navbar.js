jsx
// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./pexels-googledeepmind-18069157.jpg" height="50" width="50" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/grid">Grid</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/music">Music</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sidebar">Sidebar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/circular-sidebar">Circular Sidebar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;