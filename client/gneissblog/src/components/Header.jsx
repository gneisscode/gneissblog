import React from "react";
import NavBar from "./NavBar";
import "./header.css"

const Header = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <h1>GneissCodes</h1>
        <div className="text">
          <p>EVERYTHING IS PERSONAL.</p>
          <p>INCLUDING THIS BLOG.</p>
        </div>
      </div>

      <nav className="main__nav">
        <div className="main__menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">My Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>

            <li>
              <div className="main__socials">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-github"></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
