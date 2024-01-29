"use client";
import { useData } from "@context/DataProviders";
import { find } from "@lib/api";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import slugify from "slugify";

const Footer = ({ Category }: any) => {
  const [isOption, setIsOption] = React.useState<number>(0);
  const { Config, Posts } = useData();
  const ContactData = Config?.find((item: any) => item.id === "contact");

  const SocialMedia = Config?.find((item: any) => item.id === "SocialMedia");
  console.log(Category);
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1400px] d:mx-auto grid p:grid-cols-1   d:grid-cols-4 gap-3 py-14">
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">Liên hệ</h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <p>{ContactData?.CompanyAddress}</p>
            <p>{ContactData?.Email}</p>
            <p>{ContactData?.Hotline}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            Điều khoản sử dụng
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            {Category?.filter((item: any) => item.title === "Chính sách")?.map(
              (item: any, idx: number) => {
                const url = slugify(item.level1, {
                  lower: true,
                  locale: "vi",
                });

                return (
                  <Link
                    href={`/chinh-sach/${url}`}
                    key={idx}
                    className="hover:underline hover:text-blue-500"
                  >
                    <div className="hover:text-mainblue cursor-pointer">
                      {item.level1}
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
        <div>
          <h2 className="uppercase font-normal text-[18px]">Chi nhánh</h2>
          <div className="flex flex-col mt-3">
            {/* {Branches.map((items: any, idx: number) => (
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
            ))} */}
            <div className="bg-gray-100 hover:bg-gray-200 duration-300">
              <div className="px-2 py-4 text-center font-normal text-mainblue  duration-300 cursor-pointer hover:text-">
                Xem tất cả cửa hàng T-rúc - Vstart Camera Việt Nam
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-normal text-[18px]">
            Fanpage Vstart Camera Việt Nam
          </h2>
          <div className="mt-4 text-white font-light">
            {" "}
            <iframe
              src={SocialMedia?.facebook}
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
        Hotline:{" "}
        <span className="text-redPrimmary">{ContactData?.Hotline}</span>
      </div>
    </div>
  );
};

export default Footer;
