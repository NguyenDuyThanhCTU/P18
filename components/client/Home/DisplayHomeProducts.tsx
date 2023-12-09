import React from "react";
import ProductCard from "../Product/ProductCard";

const DisplayHomeProducts = ({ Data, Topic, Type }: any) => {
  // console.log(`hi ${Data}`);

  return (
    <div className="py-4">
      <div>
        <div className="w-full flex justify-between p:items-start gap-2 d:items-center d:flex-row p:flex-col">
          <h2 className="uppercase text-[24px] font-semibold ">{Topic}</h2>
          <div className="flex gap-3 items-center overflow-x-auto">
            {Type.map((item: any, idx: number) => (
              <div
                className=" w-max border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full"
                key={idx}
              >
                <p className=" w-max">{item.type}</p>
              </div>
            ))}
            <div className="border px-4 py-1 text-black border-black cursor-pointer hover:bg-gray-100 duration-300 rounded-full">
              <p className=" w-max">Tất cả</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid p:grid-cols-2 d:grid-cols-5 gap-1 mt-4">
        {Data.map((item: any, idx: number) => (
          <ProductCard Data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DisplayHomeProducts;
