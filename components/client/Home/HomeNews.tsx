"use client";
import { convertDate } from "@components/items/server-items/Handle";
import { useData } from "@context/DataProviders";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const HomeNews = () => {
  const { Posts } = useData();
  const Data = Posts?.filter(
    (item: any) => item.id !== "introductory" && item.level0 !== "chinh-sach"
  );

  return (
    <div className="bg-white my-10">
      <div className="d:w-[1440px]  p:w-auto d:mx-auto font-LexendDeca font-extralight">
        <div className="font-bold text-[25px] pb-2 border-b-2 border-black w-full flex justify-between">
          <h2> TIN TỨC</h2>
          <div className="flex items-center text-mainyellow hover:text-mainorange text-[18px] font-extralight cursor-pointer hover:scale-105 duration-300 ">
            <p>Xem thêm</p>
            <div className="p-2">
              <AiOutlineRight className="text-[16px]" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6 d:flex-row p:flex-col ">
          <div className="flex-1 h-max cursor-pointer hover:bg-gray-100 ">
            {Data && (
              <>
                {" "}
                <div className="p-2">
                  <div className="overflow-hidden ">
                    <Image
                      width={400}
                      height={300}
                      src={Data[0]?.image}
                      alt="first post image"
                      className="hover:scale-105 duration-500 w-full "
                    />
                  </div>
                  <div className="col-span-2 font-LexendDeca font-extralight mt-5">
                    <Link href={`/tin-tuc/${Data[0]?.url}`}>
                      <h2 className="font-normal mt-2 hover:text-blue-400 duration-300 text-[20px]">
                        {Data[0]?.title}
                      </h2>
                      <p className="text[15px]  ">
                        Camera Vstart Việt Nam |{" "}
                        {convertDate(Data[0]?.createdAt)}
                      </p>
                    </Link>

                    <div className=" text-[14px] truncate2 mt-5 font-normal">
                      {Data[0]?.description} ...
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {Data?.slice(1, 6).map((item: any, idx: number) => {
              const Date = convertDate(item.createdAt);

              return (
                <div key={idx} className="hover:bg-gray-100 duration-300">
                  <div className="grid grid-cols-3 gap-5 p-2 pt-0">
                    <Link href={`/tin-tuc/${item.url}`}>
                      <div className="w-full h-[123px] overflow-hidden">
                        <Image
                          width={200}
                          height={200}
                          src={item.image}
                          alt="news"
                          className="w-full h-full hover:scale-110 duration-300 object-contain"
                        />
                      </div>
                    </Link>
                    <div className="col-span-2 ">
                      <Link href={`/tin-tuc/${item.url}`}>
                        <h2 className="font-normal mt-2 hover:text-blue-400 duration-300 text-[18px]">
                          {item.title}
                        </h2>
                        <p className="text[14px] font-light text-gray-500  ">
                          Camera Vstart Việt Nam | {Date}
                        </p>
                      </Link>

                      <div className="truncate2 text-[14px] mt-2 font-light">
                        {item.description} ...
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
