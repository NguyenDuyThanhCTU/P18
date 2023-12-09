import Copyright from "@components/layout/client-layout/Copyright";
import Footer from "@components/layout/client-layout/Footer";
import Header from "@components/layout/client-layout/Header";
import Hotline from "@components/layout/client-layout/Hotline";
import OnTop from "@components/layout/client-layout/OnTop";
import TopFooter from "@components/layout/client-layout/TopFooter";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />
      <div className="p:mt-[84px] d:mt-0">{children}</div>
      <OnTop />
      <Hotline />

      <TopFooter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default layout;
