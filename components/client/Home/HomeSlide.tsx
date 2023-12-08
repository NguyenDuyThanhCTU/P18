"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import Link from "next/link";
const HomeSlide = () => {
  const { Slides } = useData();
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div>
            {Slides.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/san-pham`}
                  className="w-full h-[600px] overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt="slide"
                    className="w-full h-full hover:scale-105 duration-300 object-cover "
                  />
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlide;
