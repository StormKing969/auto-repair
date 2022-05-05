import React from "react";
import Logo from "../../images/logo.png";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="footer_info">
          <div className="footer_hours">
            <h1>Operating Hours</h1>
            <p>Monday - Friday: 8:00AM - 5:00PM</p>
          </div>
          <div className="footer_location">
            <h1>Location</h1>
            <p>53 Thornton Dr</p>
            <p>Hyannis, MA 02601</p>
          </div>
          <div className="footer_contact">
            <h1>Contact Me</h1>
            <p>+1 (999) 999-9999</p>
            <p>11232abbc@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>{year} ⓒ Sajana Wijesinghe. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
