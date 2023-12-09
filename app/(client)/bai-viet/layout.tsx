import React from "react";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-no-repeat bg-cover bg-center min-h-screen bg-[url(https://firebasestorage.googleapis.com/v0/b/vstarcamvietnam-ebe57.appspot.com/o/10.jpg?alt=media&token=05618b43-7951-4425-9ba6-7ff30fefdbb3)] ">
      <div className="bg-[rgba(255,255,255,0.8)] min-h-screen ">
        <div className=" py-16   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PostsLayout;
