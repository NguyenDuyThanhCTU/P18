import DisplayProduct from "@components/client/Product/DisplayProduct";
import { getDataByTypeProps } from "@lib/get-data";
import React from "react";

const DisplayProductPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const childrenParam: any = searchParams.children;
  const typeParam: any = searchParams.type;
  let Data: any;
  if (childrenParam !== undefined) {
    Data = await getDataByTypeProps("products", "childrenUrl", childrenParam);
  }
  if (typeParam !== undefined) {
    Data = await getDataByTypeProps("products", "typeUrl", typeParam);
  } else {
    Data = await getDataByTypeProps("products", "parentUrl", params.slug);
  }

  return (
    <div className="my-10">
      <div className="w-[13 00px] mx-auto ">
        <DisplayProduct
          Data={Data}
          Parent={params.slug}
          Children={childrenParam}
          type={typeParam}
        />
      </div>
    </div>
  );
};

export default DisplayProductPage;
