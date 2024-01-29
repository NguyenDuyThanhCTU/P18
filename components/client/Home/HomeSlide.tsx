"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import Image from "next/image";
const HomeSlide = ({ Data }: any) => {
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
            {Data?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <Link
                  href={`${
                    item.type === "Bài viết" ? "/bai-viet" : "/san-pham"
                  }/${item.url}`}
                  className="w-full overflow-hidden cursor-pointer"
                >
                  <Image
                    width={1920}
                    height={600}
                    src={item.image}
                    alt="slide"
                    className="w-full h-[60vh]    duration-300 object-contain "
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
