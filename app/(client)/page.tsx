import { find } from "@lib/api";
import React from "react";

const page = async () => {
  const Data = await find("Config");
  return <div>page</div>;
};

export default page;
