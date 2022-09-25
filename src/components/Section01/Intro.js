import React from "react";
import Navbar from "../core/Navbar/Navbar";
import Header_bg from "./img/bg_img.png";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro_container">
      <div className="bg_overlay">
        <div className="header_nav">

        <Navbar></Navbar>
        </div>
        
        <div className="intro_bg">
          <img src={Header_bg} alt="intro background" />
        </div>

        <div className="intro_content">
          <div className="intro_text">
            <span className="regular">Looking For</span>
            <span className="regular">The Right Vehicle</span>
            <span className="bold">Repair Services?</span>
          </div>

          <div className="intro_appointment">
            <a href="#Contact">Book An Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
