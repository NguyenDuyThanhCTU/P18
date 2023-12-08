import HomeContent from "@components/client/Home/HomeContent";
import HomeNews from "@components/client/Home/HomeNews";
import HomePolicy from "@components/client/Home/HomePolicy";
import HomeSlide from "@components/client/Home/HomeSlide";
import HomeVideo from "@components/client/Home/HomeVideo";

import { getAllDataProps, getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á",
  description: "CÔNG TY TNHH THƯƠNG MẠI SẢN XUẤT VIỆT Á ",
};

const HomePage = async () => {
  const Data = await getDataByTypeProps("posts", "topic", "Tin tức");
  const ProductData = await getAllDataProps("products");
  return (
    <div>
      <HomeSlide />
      <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2 ">
        {/* <HomeContent Data={ProductData} /> */}
        <HomeNews Data={Data} />
        <HomeVideo />
      </div>
      <HomePolicy />
    </div>
  );
};

export default HomePage;
