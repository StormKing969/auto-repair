import React from "react";
import Logo from "./img/brake.png";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer_container">
      <div className="footer_copyright">
        <p>{year} ⓒ Sajana Wijesinghe | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
