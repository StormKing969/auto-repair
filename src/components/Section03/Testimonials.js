import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";

// custom styles
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonial_container">
      <h3 className="testimonial_title">TESTIMONIALS</h3>
      <p className="testimonial_subtitle">
        WHAT OUR <b>CLIENTS SAY</b>
      </p>

      <div className="testimonial_cards">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial_card card01">
              <p>
                <RiDoubleQuotesL /> <br></br>{" "}
                <div className="testimonial_card_content">
                  {" "}
                  Quick services and good quality
                </div>
              </p>
              <h4 className="testimonial_card_author">Mike West</h4>
              <span className="testimonial_card_date">26 August, 2016</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_card card01">
              <p>
                <RiDoubleQuotesL /> <br></br>{" "}
                <div className="testimonial_card_content">
                  {" "}
                  Great place. Highly recommend!!!
                </div>
              </p>
              <h4 className="testimonial_card_author">James Bond</h4>
              <span className="testimonial_card_date">26 May, 2018</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_card card01">
              <p>
                <RiDoubleQuotesL /> <br></br>{" "}
                <div className="testimonial_card_content">
                  I had a pre-purchase inspection on a Mazda. I was looking to
                  buy it and they let me bring it in on a Saturday with no
                  appoint. Great guys! I recommend this service to everyone who
                  looks for quality!
                </div>
              </p>
              <h4 className="testimonial_card_author">William Hill</h4>
              <span className="testimonial_card_date">26 September, 2018</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_card card01">
              <p>
                <RiDoubleQuotesL /> <br></br>{" "}
                <div className="testimonial_card_content">
                  I do oil changes regularly here, as the car needs the oil
                  changed in order to work properly. The workers are polite and
                  they really know what they do. I'm also satisfied with the
                  prices here!
                </div>
              </p>
              <h4 className="testimonial_card_author">Brian Murdoch</h4>
              <span className="testimonial_card_date">09 October, 2018</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial_card card01">
              <p>
                <RiDoubleQuotesL /> <br></br>{" "}
                <div className="testimonial_card_content">
                  I had a fuel injection issue, and that's why I turned to this
                  service! They fixed everything and even washed my car for
                  free! I’m glad that I went there, the people working there
                  also gave me warranty.
                </div>
              </p>
              <h4 className="testimonial_card_author">Richard Smith</h4>
              <span className="testimonial_card_date">01 October, 2018</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
