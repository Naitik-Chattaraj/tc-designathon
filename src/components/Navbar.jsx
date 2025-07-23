import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
    </nav>
  );
};

const navStyle = {
  padding: "1rem",
  backgroundColor: "#f0f0f0",
  display: "flex",
  gap: "1rem",
  borderRadius: "25px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
};

export default Navbar;
