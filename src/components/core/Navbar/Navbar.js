import React from "react";
import Logo from "./img/brake.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="nav_logo">
        <img src={Logo} alt="company logo" />
        <span>Claudia Auto Shop</span>
      </div>
      <div className="nav_links">
        <ul>
          <li>
            <a href="#intro_container">Home</a>
          </li>
          <li>
            <a href="#stats_container">About</a>
          </li>
          <li>
            <a href="#Detailing">Detailing</a>
          </li>
          <li>
            <a href="#appointment_container">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
