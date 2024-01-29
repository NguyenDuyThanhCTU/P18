import HomeContent from "@components/client/Home/HomeContent";
import HomeNews from "@components/client/Home/HomeNews";
import HomePolicy from "@components/client/Home/HomePolicy";
import HomeSlide from "@components/client/Home/HomeSlide";
import HomeVideo from "@components/client/Home/HomeVideo";
import { find } from "@lib/api";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang Chủ | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const HomePage = async () => {
  const Posts = await find("Posts");
  const ProductData = await find("Products");
  const SlideData = await find("Slides");
  const ProductCategory = await find("ProductCategory");

  return (
    <div>
      <HomeSlide Data={SlideData} />
      <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2 ">
        <HomeContent Category={ProductCategory} />
        <HomeNews />
        <HomeVideo />
      </div>
      {/* <HomePolicy /> */}
    </div>
  );
};

export default HomePage;
