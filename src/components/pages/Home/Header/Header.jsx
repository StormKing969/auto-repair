import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "./Swiper.scss";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header_swiper_style header01">
            <h1>Expert technicain</h1>
            <p>We are committed in earning your trust</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_swiper_style header02">
            <h1>Competitive prices</h1>
            <p>Offers the best value for the service</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_swiper_style header03">
            <h1>Make your car last longer</h1>
            <p>Varity of premium oil </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_swiper_style header04">
            <h1>Find the tire that matches your neeeds</h1>
            <p>Best tires on the market</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
