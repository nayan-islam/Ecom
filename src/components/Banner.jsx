import React from "react";
import Slider from "@ant-design/react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mt-10">
      <Slider {...settings}>
        <div>
          <Link to="/product">
            <img
              className="h-[550px] w-full object-cover rounded-xl"
              src="src/assets/banner0.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product">
            <img
              className="h-[550px] w-full object-cover rounded-xl"
              src="src/assets/banner01.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/product">
            <img
              className="h-[550px] w-full object-cover rounded-xl"
              src="src/assets/banner02.jpg"
              alt=""
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
