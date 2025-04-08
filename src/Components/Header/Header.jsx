// src/Components/Header/Header.jsx
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/assets/logo.png" alt="NPR Logo" className="logo-img" />
        <h1 className="logo-text">NPR - College Event Planner</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}

export default Header;
