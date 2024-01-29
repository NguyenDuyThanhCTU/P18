import Introduction from "@components/client/Introduction/Introduction";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giới Thiệu | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const IntroductionPage = async () => {
  const Data = await getDataByTypeProps(
    "posts",
    "topic",
    "Giới thiệu về vstarcam"
  );

  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div className="border-b pb-2">
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
              Tại sao chọn Camera T-rúc
            </div>
          </div>
          <div className="text-center">
            Chúng tôi không ngừng nổ lực nghiên cứu và tìm kiếm những giải pháp
            an ninh mới và tốt nhất tại thị trường trong và ngoài nước để mang
            đến cho khách hàng một hệ thống giám sát an ninh chuyên nghiệp
          </div>
        </div>
        <div className="mt-4">
          <Introduction Data={Data[0]} />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
