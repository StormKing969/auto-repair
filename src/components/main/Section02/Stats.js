import React from "react";
import Img01 from "./img/img-1.jpg";
import Img02 from "./img/img-2.jpg";
import Img03 from "./img/img-3.jpg";
import Img04 from "./img/img-4.jpg";
import "./Stats.scss";

const Stats = () => {
  return (
    <div className="stats_container" id="stats_container">
      <div className="stats_content">
        <h3 className="grey_color">SOME STATISTICS ABOUT US</h3>
        <h1>AUTO REPAIR TECHNICAL STATISTICS</h1>
        <h1 className="regular_font">YOU MUST KNOW</h1>

        <div className="stats_values_container">
          <div className="stats_values experience">
            <h1>15</h1>
            <div class="vertical_line"></div>
            <span className="experience_text">
              YEARS OF <br></br> <b>EXPERIENCE</b>
            </span>
          </div>
          <div className="stats_values worker">
            <h1>27</h1>
            <div class="vertical_line"></div>
            <span className="worker_text">
              TECHNICIANS & <br></br> <b>WORKERS</b>
            </span>
          </div>
          <div className="stats_values customer">
            <h1>3277</h1>
            <div class="vertical_line"></div>
            <span className="customer_text">
              SATISFIED <br></br> <b>CUSTOMERS</b>
            </span>
          </div>
        </div>
      </div>

      <div className="work_img">
        <div className="stats_img01">
          <img src={Img01} alt="service images" />
        </div>
        <div className="stats_img02">
          <img src={Img02} alt="service images" />
        </div>
        <div className="stats_img03">
          <img src={Img03} alt="service images" />
        </div>
        <div className="stats_img04">
          <img src={Img04} alt="service images" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
