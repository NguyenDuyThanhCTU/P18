"use client";
import { PolicyItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const { ContactData, Branches } = useData();
  const [isOption, setIsOption] = React.useState<number>(0);

  const HandleSelected = (idx: number) => {
    if (idx === isOption) {
      setIsOption(0);
    } else {
      setIsOption(idx);
    }
  };
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1400px] d:mx-auto grid p:grid-cols-1   d:grid-cols-4 gap-3 py-14">
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">Liên hệ</h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <p>{ContactData.address}</p>
            <p>{ContactData.gmail}</p>
            <p>{ContactData.phone}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            Điều khoản sử dụng
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            {PolicyItems.map((item: any, idx: number) => (
              <Link
                href={`/bai-viet/${item.value}`}
                key={idx}
                className="hover:text-mainblue duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="uppercase font-normal text-[18px]">Chi nhánh</h2>
          <div className="flex flex-col mt-3">
            {Branches.map((items: any, idx: number) => (
              <div
                key={idx}
                className="border-x border-t duration-300 cursor-pointer hover:text-mainblue "
              >
                <div className="p-2 flex start-0 gap-2">
                  <div className="text-[24px] text-mainblue">
                    <IoLocationOutline />
                  </div>
                  <div>{items.address}</div>
                </div>
              </div>
            ))}
            <div className="bg-gray-100 hover:bg-gray-200 duration-300">
              <div className="px-2 py-4 text-center font-normal text-mainblue  duration-300 cursor-pointer hover:text-">
                Xem tất cả cửa hàng Hải Nam
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            Fanpage Nệm Việt Á
          </h2>
          <div className="mt-4 text-white font-light">
            {" "}
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fctynemvieta&tabs=timeline&width=340&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              className="outline-none"
              height="300"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="p:w-auto p:mx-2 d:w-[1400px] d:mx-auto py-2 font-normal">
        Hotline: <span className="text-redPrimmary">{ContactData.phone}</span>
      </div>
    </div>
  );
};

export default Footer;
