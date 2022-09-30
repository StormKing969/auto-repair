import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./History.scss";

const History = () => {
  return (
    <div className="history_container">
      COMING SOON...
      <Link to="/"><BsFillArrowLeftCircleFill /></Link>
    </div>
  );
};

export default History;
