import React from "react";
import PostsCategory from "@components/client/Posts/PostsCategory";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài Viết| Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const PostsPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "topicUrl", params.slug);
  const markup = { __html: Data[0]?.content };

  return (
    <div className="p:w-auto d:w-[1470px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-5 gap-10">
      <div className="flex flex-col gap-5">
        <div className="border h-max border-gray-400">
          <PostsCategory />
        </div>
      </div>
      <div className="col-span-4">
        <div className="  ">
          <h1 className="text-[28px] font-semibold">{Data[0]?.topic}</h1>
          <div dangerouslySetInnerHTML={markup} className="mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
