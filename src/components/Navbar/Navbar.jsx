import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_bg_container">
      <div className="navbar_container">
        <div className="navbar_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="navbar_links">
          <ul>
            <li>
              <NavLink end to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink end to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <a href="https://sajana-wijesinghe.com/">Auto Detailing</a>
            </li>
            <li>
              <NavLink end to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink end to="/contact">
                Let's Talk
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
