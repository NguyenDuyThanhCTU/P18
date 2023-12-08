"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useData } from "@context/DataProviders";

const DisplayProduct = ({ Data, Parent, Children, Type }: any) => {
  const [Topic, setTopic] = React.useState<any>("");
  const { productTypes } = useData();

  const TopicValue = productTypes?.map((item: any) => {
    const topic = item.children.filter(
      (item: any) => item.childrenUrl === Children
    );
    if (topic.length > 0) {
      return topic[0]?.children;
    }
  });
  console.log(TopicValue);
  // if (Type !== undefined) {
  //   const topic = productTypes.filter((item: any) => item.typeUrl === Type);
  //   if (topic) {
  //     console.log(topic[0]?.type);
  //   }
  // }
  // if (Children !== undefined) {
  //   productTypes?.children?.map((item: any) => {
  //     if (item.childrenUrl === Children) {
  //       console.log("hiih");
  //     }
  //   });
  // } else {
  //   const topic = productTypes.filter((item: any) => item.parentUrl === Parent);
  //   if (topic) {
  //     console.log(topic[0]?.type);
  //   }
  // }

  return (
    <div className="py-4">
      <div>
        <div className="w-full flex justify-between items-center">
          <h2 className="uppercase text-[24px] font-semibold ">{Topic}</h2>
        </div>
      </div>
      {/* <div className="grid grid-cols-5 gap-1 mt-4">
        {Data.map((item: any, idx: number) => (
          <ProductCard Data={item} key={idx} />
        ))}
      </div> */}
    </div>
  );
};

export default DisplayProduct;
