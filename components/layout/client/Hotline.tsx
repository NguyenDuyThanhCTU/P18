"use client";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Hotline() {
  const { Config } = useData();
  const facebook = Config?.find(
    (item: any) => item.id === "SocialMedia"
  ).facebook;
  const zalo = Config?.find((item: any) => item.id === "SocialMedia").zalo;
  const hotline = Config?.find((item: any) => item.id === "contact").Hotline;
  return (
    <>
      {Config && (
        <div className="fixed bottom-7 right-10  box-border flex flex-col gap-5">
          <div className="flex items-center d">
            <Link
              href={facebook ? facebook : "https://www.facebook.com"}
              className="h-14 w-14 p-2 bg-blue-500 border-white border flex items-center rounded-full justify-center"
            >
              <FaFacebookF className="text-white text-[40px]" />
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              href={zalo ? zalo : "https://zalo.me"}
              className="h-14 w-14 bg-white border border-blue-500 text-blue-500 flex items-center rounded-full justify-center"
            >
              <SiZalo className=" w-full h-full p-3" />
            </Link>
          </div>
          <Link href={hotline ? `tel:${hotline}` : "tel:1900 1234"}>
            <div className="flex items-center">
              <div className="text-black font-semibold d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-5">
                <span className="ml-5">Liên hệ với chúng tôi</span>
              </div>
              <div className="h-14 w-14   call-animation">
                <BiPhoneCall className="text-white text-[40px]" />
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Hotline;
