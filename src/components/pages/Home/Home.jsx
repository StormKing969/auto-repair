import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home_bg_container">
      <Header />

      <div className="home_appointment">
        <h1>Make an appointment now with our online form</h1>
        <Link to="/contact">Make an appointment</Link>
      </div>
    </div>
  );
};

export default Home;
