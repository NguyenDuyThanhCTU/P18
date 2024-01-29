import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import TopFooter from "@components/layout/client/TopFooter";
import { find } from "@lib/api";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const Category = await find("ProductCategory");
  const PostCategory = await find("PostCategory");

  return (
    <div className="font-LexendDeca font-extralight">
      <Header ProductCategory={Category} />
      <div className="p:mt-[84px] d:mt-0">{children}</div>
      <OnTop />
      <Hotline />
      <TopFooter />
      <Footer Category={PostCategory} />
      <Copyright />
    </div>
  );
};

export default layout;
