// src/Components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} NPR College - Event Management System</p>
    </footer>
  );
}

export default Footer;
