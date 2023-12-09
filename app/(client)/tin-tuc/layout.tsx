import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-no-repeat bg-cover bg-[url(https://firebasestorage.googleapis.com/v0/b/vstarcamvietnam-ebe57.appspot.com/o/1.jpg?alt=media&token=d570701b-d919-41b7-86c0-0cb36c31382f)] ">
      <div className="bg-[rgba(255,255,255,0.8)] ">
        <div className=" py-16   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
