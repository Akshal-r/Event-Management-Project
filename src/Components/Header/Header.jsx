
import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

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

        {!isLoggedIn ? (
          <Link to="/login" className="login-link">Login</Link>
        ) : (
          <>
            
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
