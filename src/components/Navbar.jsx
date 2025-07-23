import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // ✅ You forgot this
  return (
    <nav className="liquid-navbar" ref={navRef}>
      <div className="nav-left">
        <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
        <NavLink to="/announcements" onClick={() => setIsOpen(false)}>Announcements</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
      </div>

      <div className="nav-center">
        <img src="../src/assets/tc-logo.png" alt="Logo" className="logo" />
      </div>

      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <NavLink to="/team" onClick={() => setIsOpen(false)}>Core Team</NavLink>
        <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
        <NavLink to="/legacy" onClick={() => setIsOpen(false)}>Legacy</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
