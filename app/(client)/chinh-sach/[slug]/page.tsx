import { findById } from "@lib/api";
import React from "react";

type PolicyPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const PolicyPage = async ({ params, searchParams }: PolicyPageProps) => {
  const Data = await findById("Posts", params.slug);

  return <div>PolicyPage</div>;
};

export default PolicyPage;
