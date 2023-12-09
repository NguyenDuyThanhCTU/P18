import Video from "@components/client/Video/Video";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dự Án| Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const VideoPage = () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div>
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
              Những đánh giá khách quan của khách hàng dành Camera T-rúc
            </div>
          </div>
          <div className="text-center">
            Trong khi thực hiện các dự an lắp đặt camera cho khách hàng, Camera
            T-rúc có quay lại một số dự án và xin khách hàng đánh giá về dịch vụ
            của chúng tôi.
          </div>
        </div>
        <div className="grid p:grid-cols-1 mt-5 gap-10 d:grid-cols-2 justify-between">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
