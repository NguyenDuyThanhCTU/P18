import Category from "@components/client/Home/Category";
import HomeContent from "@components/client/Home/HomeContent";
import HomeNews from "@components/client/Home/HomeNews";
import HomePolicy from "@components/client/Home/HomePolicy";
import HomeVideo from "@components/client/Home/HomeVideo";
import Sale from "@components/client/Home/Sale";
import ShortIntro from "@components/client/Home/ShortIntro";
import Slide from "@components/client/Home/Slide";
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
      <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2">
        <Slide />
        <ShortIntro />
      </div>
      {/* <Sale /> */}
      <div className="d:w-[1400px] d:mx-auto p:w-auto p:mx-2 bg-cover bg-bottom bg-fixed bg-[url(https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926213403877_09799ed7eb1778ec9ef0fb61558b60eb.jpg?alt=media&token=ffccfc58-f945-4712-9692-159a43123859)]">
        <div className="bg-fixed bg-[rgba(255,255,255,0.71)]">
          <HomeContent Data={ProductData} />
          <HomeNews Data={Data} />
          <HomeVideo />
          <HomePolicy />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
