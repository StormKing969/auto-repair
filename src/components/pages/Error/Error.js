import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error_container">
      <h1>Invalid Link</h1>
      <Link to="/"><BsFillArrowLeftCircleFill /></Link>
    </div>
  );
};

export default Error;
