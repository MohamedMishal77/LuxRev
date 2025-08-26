import React, { useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="luxrev-header">
      {/* Logo → Scrolls to top */}
      <div className="logo">
        <a href="#home" className="logo-link" onClick={closeMenu}>
          <span className="logo-icon"><IoCarSportSharp /></span>
          <span className="logo-text">LuxRev</span>
        </a>
      </div>

      {/* Nav Items */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
  <a
    href="#home"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }}
  >
    Home
  </a>

  <a
    href="#fleets"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("fleets")?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }}
  >
    Fleets
  </a>

  <a
    href="#pricing"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }}
  >
    Pricing
  </a>

  <a
    href="#support"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById("support")?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }}
  >
    Support
  </a>
</nav>


      {/* Burger Icon */}
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
