import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";
import { Pagination } from "keep-react";
import { Navigation } from "lucide-react";

export default function App() {
  return (
    <>
      <Swiper
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide className="min-w-full">
          <img
            className="w-full"
            src="https://www.eschoolnews.com/files/2018/05/blended-learning.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="min-w-full">
          <img
            className="w-full"
            src="https://www.eschoolnews.com/files/2018/05/blended-learning.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="min-w-full">
          <img
            className="w-full"
            src="https://www.eschoolnews.com/files/2018/05/blended-learning.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="min-w-full">
          <img
            className="w-full"
            src="https://www.eschoolnews.com/files/2018/05/blended-learning.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
