"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cover() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed (time between slides)
  };
  return (
    <div className="py-10  ">
      <Slider {...settings}>
        <div className="bg-black">
          <img
            className="object-cover w-full md:h-[50vh]"
            src="../image.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full md:h-[50vh]"
            src="../image.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full md:h-[50vh]"
            src="../image.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full md:h-[50vh]"
            src="../image.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover w-full md:h-[50vh]"
            src="../image.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Cover;

// style={{ backgroundImage: "url(/image.png)", backgroundSize: "cover" }}
