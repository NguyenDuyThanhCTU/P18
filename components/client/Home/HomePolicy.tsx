"use client";

import { PostsTypeItems } from "@assets/item";
import Link from "next/link";
import React from "react";

const HomePolicy = () => {
  return (
    <div className="py-20 bg-mainblue text-white">
      <div className="d:w-[1440px] p:w-auto mx-auto">
        <div className="flex justify-between d:flex-row p:flex-col d:gap-0 p:gap-10">
          {PostsTypeItems.slice(1, 5).map((item, index) => (
            <Link
              href={`/bai-viet/${item.value}`}
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="p-5 rounded-full w-max bg-white flex items-center justify-center  hover:scale-110 duration-300"></div>
              <h2 className="font-LexendDeca text-[20px] font-normal hover:text-blue-600 duration-300">
                {item.label}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePolicy;
