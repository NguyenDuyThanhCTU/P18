"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayProduct from "../Product/DisplayProduct";
import { TypeProductItems } from "@assets/item";

const HomeContent = ({ Data }: any) => {
  console.log(Data);
  const { productTypes } = useData();
  const DrapProduct = Data.filter((product: any) => product.parent === "Drap");
  const Product1 = Data.filter((product: any) => product.parent === "Gối");
  const Product2 = Data.filter((product: any) => product.parent === "Phụ kiện");
  return (
    <div className="flex flex-col bg-white">
      {TypeProductItems?.map((item: any, idx: number) => {
        const sortProduct = Data.filter(
          (product: any) => product.parentUrl === item.value
        );
        return (
          <div key={idx}>
            <DisplayProduct Data={sortProduct} Topic={item.type} />
          </div>
        );
      })}{" "}
      {/* <DisplayProduct Data={DrapProduct} Topic="Drap" />
      <DisplayProduct Data={Product1} Topic="Gối" />
      <DisplayProduct Data={Product2} Topic="Phụ kiện" /> */}
      {/* <DisplayProduct Data={saleProducts} Topic="Sản phẩm khuyến mãi" />
      <DisplayProduct Data={bestSellerProducts} Topic="Sản phẩm bán chạy" />
      <DisplayProduct Data={newProducts} Topic="Sản phẩm mới" />
      <DisplayProduct Data={hotProducts} Topic="Sản phẩm nổi bật" /> */}
    </div>
  );
};

export default HomeContent;
