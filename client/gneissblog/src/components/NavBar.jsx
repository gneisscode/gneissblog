import React, { useState } from "react";
import "./navBar.css";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive);
  }

  return (
    <div className="container">
      <div className="top__container">
        <div className="search__bar">
          <input type="text" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <i className="fa fa-bars" onClick={toggleMenu}></i>
      </div>

      <nav className={`nav ${isActive ? "active" : ""}`}>
        <i class="fa-solid fa-x" onClick={toggleMenu}></i>
        <div className="ham-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">My Blog</a>
            </li>
          </ul>
          <div className="socials">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
