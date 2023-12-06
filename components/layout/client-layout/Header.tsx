"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Drawer } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume, FaSearch } from "react-icons/fa";
import { IoIosMenu, IoMdTime } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [open, setOpen] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const { ContactData, TradeMarkData, productTypes } = useData();
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [openTypeMB, setOpenTypeMB] = useState(0);
  return (
    <>
      <div className="p:hidden d:block">
        <div className="bg-gradient-to-br from-mainblue to-mainNormalBlue text-white h-[40px]">
          <div className="w-[1300px] mx-auto flex justify-between items- h-full">
            <div className="flex gap-4">
              <div
                className="flex items-center gap-2"
                onClick={() =>
                  window.open(`tel:${ContactData.phone}`, "_blank")
                }
              >
                <FaPhoneVolume /> <p> {ContactData.phone}</p>{" "}
              </div>
              <div
                className="flex items-center gap-2"
                onClick={() =>
                  window.open(`mailto:${ContactData.gmail}`, "_blank")
                }
              >
                <CiMail />
                <p>{ContactData.gmail}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdTime />
              <div>Online: 5:00 - 17:00</div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[96px] shadow-xl">
          <div className="w-[1300px] mx-auto flex items-center justify-between gap-5">
            <Link href={`/`} className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/z4946974075826_a7f354251fb7daa00a092fd804cdd655.jpg?alt=media&token=38e448e7-2887-488c-9e46-c71492d73f04"
                alt="Logo Vstarcam"
                className="h-[96px]"
              />
            </Link>
            <div className="flex gap-5 w-max">
              {HeaderItems.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="cursor-pointer w-max font-normal text-black  hover:text-mainNormalBlue duration-300 text-[18px]"
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div className=" relative">
              <div
                className={`${
                  OpenSearch ? "border" : "border-none"
                } border rounded-full border-mainblue flex items-center `}
              >
                <div
                  className={`pl-4 ${
                    OpenSearch ? "w-full " : "w-0"
                  }  justify-between items-center grid grid-cols-7`}
                >
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6"
                    placeholder={search ? search : "Tìm kiếm sản phẩm"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer `}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                {OpenSearch ? (
                  <>
                    <div
                      className="bg-mainblue py-3  hover:bg-mainNormalBlue  duration-300 px-6 text-white rounded-r-full cursor-pointer "
                      onClick={() => setOpenSearch(false)}
                    >
                      <FaSearch />
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div
                      className="bg-mainblue py-3  hover:bg-mainNormalBlue  duration-300 px-6 text-white rounded-r-full cursor-pointer rounded-l-full"
                      onClick={() => setOpenSearch(true)}
                    >
                      <FaSearch />
                    </div>
                  </>
                )}
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`/chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="d:hidden p:block bg-mainNormalBlue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-gradient-to-bl from-mainblue via-blue-400 to-mainNormalBlue  text-white shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <div className="h-[84px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/z4946974075826_a7f354251fb7daa00a092fd804cdd655.jpg?alt=media&token=38e448e7-2887-488c-9e46-c71492d73f04"
                alt="Logo"
                className="w-full h-full p-2"
              />
            </div>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className=" ">
              <div className="p-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/z4946974075826_a7f354251fb7daa00a092fd804cdd655.jpg?alt=media&token=38e448e7-2887-488c-9e46-c71492d73f04"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col w-full border-b border-mainblue pb-2">
                {TypeProductItems.map((item: any, idx: number) => {
                  const sort = productTypes?.filter(
                    (type: any) => type.parent === item.label
                  );
                  return (
                    <div key={idx}>
                      <div
                        className="w-full justify-between py-2 border-t items-center
                     flex"
                      >
                        <Link
                          href={`/san-pham/${item.value}`}
                          className={`${
                            openTypeMB === idx + 1 && "text-orange-500"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {sort?.length > 0 && (
                          <div
                            className={`${
                              openTypeMB === idx + 1 && "text-orange-500"
                            }`}
                            onClick={() => setOpenTypeMB(idx + 1)}
                          >
                            <IoChevronDownOutline />{" "}
                          </div>
                        )}
                      </div>
                      {sort.length > 0 && openTypeMB === idx + 1 && (
                        <div className="ml-2 flex flex-col">
                          {sort?.map((items: any, idx: number) => (
                            <Link
                              href={`/san-pham/${item.value}?type=${items.typeUrl}`}
                              key={idx}
                              className="hover:text-orange-500 py-1"
                            >
                              {items.type}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <Link
                      href={`/${item.value}`}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </>
  );
};

export default Header;
