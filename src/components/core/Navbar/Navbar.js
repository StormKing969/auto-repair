import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="/schedule">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
