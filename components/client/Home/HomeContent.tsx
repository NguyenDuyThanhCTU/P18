"use client";
import { useData } from "@context/DataProviders";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DisplayHomeProducts from "./DisplayHomeProducts";
import { ProductTypeItems } from "@assets/item";

const HomeContent = ({ Category }: any) => {
  const { Products } = useData();

  return (
    <div className="flex flex-col bg-white py-10">
      {ProductTypeItems?.map((item: any, idx: number) => {
        const sortProduct = Products?.filter(
          (product: any) => product.level0 === item.value
        );
        const type = Category?.filter(
          (type: any) => type.level0 === item.value
        );
        return (
          <div key={idx}>
            <DisplayHomeProducts
              Data={sortProduct}
              Topic={item.label}
              Type={type}
              Level0={item.value}
            />
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
