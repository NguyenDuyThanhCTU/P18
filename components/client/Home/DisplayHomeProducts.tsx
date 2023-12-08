import React from "react";
import ProductCard from "../Product/ProductCard";

const DisplayHomeProducts = ({ Data, Topic, Type }: any) => {
  // console.log(`hi ${Data}`);

  return (
    <div className="py-4">
      <div>
        <div className="w-full flex justify-between items-center">
          <h2 className="uppercase text-[24px] font-semibold ">{Topic}</h2>
          <div className="flex gap-3 items-center">
            {Type.map((item: any, idx: number) => (
              <div
                className="border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full"
                key={idx}
              >
                {item.type}
              </div>
            ))}
            <div className="border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full">
              Tất cả
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 mt-4">
        {Data.map((item: any, idx: number) => (
          <ProductCard Data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DisplayHomeProducts;
