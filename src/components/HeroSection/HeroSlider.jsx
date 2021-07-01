import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1Img from "../../Assets/Flow 1 1.svg";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./HeroSlider.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

export default function HeroSlider() {
  return (
    <>
      <Swiper
      autoplay={{
        "delay": 2000,
        "disableOnInteraction": false
      }}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <div className="slider flex lg:flex-row md:flex-row flex-col items-center justify-center  overflow-hidden py-5 px-2">
            <div className="content font-Montserrat text-left">
              <p className="text-sm text-red-600">NEW ARRIVALS</p>
              <h2 className="font-extrabold text-6xl py-2">TOP TRENDS</h2>
              <p className="text-sm mb-2 text-black font-semibold w- w-5/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                montes, aliquam et urna. Et proin netus sit in nibh commodo at.
              </p>
              <button class="bg-button-blue hover:bg-gray-900 text-white py-2 px-4 rounded">
                Buy Now <FaArrowRight className="inline-block" />
              </button>
            </div>
            <div className="img">
              <img src={slide1Img} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className="slider flex lg:flex-row md:flex-row flex-col items-center justify-center  overflow-hidden py-5 px-2">
            <div className="content font-Montserrat text-left">
              <p className="text-sm text-red-600">NEW ARRIVALS</p>
              <h2 className="font-extrabold text-6xl py-2">TOP TRENDS</h2>
              <p className="text-sm mb-2 text-black font-semibold w- w-5/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                montes, aliquam et urna. Et proin netus sit in nibh commodo at.
              </p>
              <button class="bg-button-blue hover:bg-gray-900 text-white py-2 px-4 rounded">
                Buy Now <FaArrowRight className="inline-block" />
              </button>
            </div>
            <div className="img">
              <img src={slide1Img} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <div className="slider flex lg:flex-row md:flex-row flex-col items-center justify-center  overflow-hidden py-5 px-2">
            <div className="content font-Montserrat text-left">
              <p className="text-sm text-red-600">NEW ARRIVALS</p>
              <h2 className="font-extrabold text-6xl py-2">TOP TRENDS</h2>
              <p className="text-sm mb-2 text-black font-semibold w- w-5/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                montes, aliquam et urna. Et proin netus sit in nibh commodo at.
              </p>
              <button class="bg-button-blue hover:bg-gray-900 text-white py-2 px-4 rounded">
                Buy Now <FaArrowRight className="inline-block" />
              </button>
            </div>
            <div className="img">
              <img src={slide1Img} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
