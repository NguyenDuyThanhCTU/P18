"use client";
import { HeaderItems, TypeProductItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillCaretRight, AiOutlineDown } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const { TradeMarkData, productTypes, ContactData, Products } = useData();
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTypeMB, setOpenTypeMB] = useState(0);

  const IntroductionItems = [
    {
      label: "Thông tin nệm Việt Á",
      value: "thong-tin-nem-viet-a",
    },
    {
      label: "Chia sẽ kiến thức",
      value: "chia-se-kien-thuc",
    },
    {
      label: "Tại sao chọn nệm Việt Á",
      value: "tai-sao-chon-nem-viet-a",
    },
  ];
  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  const router = useRouter();
  const HandleSearch = () => {
    router.push(`/san-pham?search=${search}`);
    setSearch("");
  };
  return (
    <>
      <div className="d:block fixed z-50 w-full top-0 p:hidden">
        <div className="flex flex-col bg-white">
          <div className="flex justify-between gap-10 items-center d:w-[1400px] mx-auto p:w-auto">
            <Link href={`/`} className=" p-1 h-[70px] ">
              <img
                src={TradeMarkData.websiteLogo}
                alt="logo"
                className="h-full cursor-pointer"
              />
            </Link>

            <div className=" relative col-span-2 flex justify-center">
              <div className="border rounded-full border-gray-200 bg-gray-100 flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7 bg-gray-100">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 bg-gray-100"
                    placeholder="Tìm kiếm sản phẩm"
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
                <div
                  className="bg-gray-100 py-3 px-6 text-black   rounded-r-full cursor-pointer"
                  onClick={() => HandleSearch()}
                >
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-blue-100 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <div
                        onClick={() => HandleSearch()}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-blue-200"
                      >
                        {product.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="w-full bg-mainblue py-2 px-4 text-white uppercase font-bold text-[22px]">
                Hotline: {ContactData.phone}
              </div>
              {/* <div className="flex gap-2 ">
                <div
                  className="flex items-center gap-2 w-max "
                  onClick={() =>
                    window.open(`mailto:${ContactData.gmail}`, "_blank")
                  }
                >
                  <CiMail />
                  <p className="border-r px-2">{ContactData.gmail}</p>
                </div>
                <div
                  className=" "
                  onClick={() =>
                    window.open(`tel:${ContactData.phone}`, "_blank")
                  }
                >
                  <div className="flex  flex-col px-2">
                    <div className="flex items-center gap-2">
                      <FaPhoneVolume />
                      Hotline:{" "}
                      <span className="text-redPrimmary font-normal">
                        {ContactData.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="bg-mainblue">
            <div className="d:w-[1400px] mx-auto p:w-auto">
              <div className="flex gap-10  mt-4 w-full justify-center">
                {HeaderItems.map((item: any, idx: number) => (
                  <div className="relative group/main " key={idx}>
                    <Link
                      className="text-white uppercase font-semibold duration-300 flex items-center text-[20px] gap-2 "
                      href={`/${item.value}`}
                    >
                      <p> {item.label}</p>
                      {(item.label === "Sản phẩm" ||
                        item.label === "Giới thiệu") && (
                        <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300 text-white" />
                      )}
                    </Link>
                    <div className="h-[2px] bg-gray-400 w-0 group-hover/main:w-full duration-300 mt-3 "></div>
                    {item.label === "Giới thiệu" && (
                      <div className="flex flex-col top-8 absolute">
                        <div className="bg-none w-full h-4"></div>
                        <div className=" top-9 hidden group-hover/main:block duration-300">
                          <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                            {IntroductionItems.map(
                              (items: any, idx: number) => (
                                <Link
                                  key={idx}
                                  href={`/bai-viet/${items.value}`}
                                  className="w-max  border-b"
                                >
                                  <p className="py-2 px-4 hover:text-maingreen duration-300 text-black">
                                    {" "}
                                    {items.label}
                                  </p>
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.label === "Sản phẩm" && (
                      <div className="flex flex-col top-8 absolute z-50">
                        <div className="bg-none w-full h-4"></div>
                        <div className=" top-9 hidden group-hover/main:block duration-300">
                          <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                            {TypeProductItems.map((items: any, idx: number) => {
                              const sort = productTypes.filter(
                                (item: any) => item.parentUrl === items.value
                              );

                              return (
                                <div
                                  key={idx}
                                  className=" group/lv1 relative  border-b"
                                >
                                  <Link
                                    href={`/san-pham/${items.value}`}
                                    className="  border-b"
                                  >
                                    <div className="py-2 px-4 hover:bg-gray-100 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                      {" "}
                                      <p className="py-2 w-max px-4 hover:text-maingreen duration-300 text-black">
                                        {items.label}
                                      </p>
                                      {sort.length > 0 && (
                                        <AiFillCaretRight
                                          className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                        />
                                      )}
                                    </div>
                                  </Link>
                                  {items.label === "Khác" ? (
                                    <>
                                      {" "}
                                      {sort.length > 0 && (
                                        <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                          <div className="">
                                            {sort.map(
                                              (items: any, idx: number) => (
                                                <div key={idx}>
                                                  <div className=" group/lv2    relative font-light     border-b">
                                                    <Link
                                                      href={`${
                                                        items.type ===
                                                        "Sản phẩm cấp độ 1"
                                                          ? `/san-pham/tat-ca?level=1`
                                                          : items.type ===
                                                            "Sản phẩm cấp độ 2"
                                                          ? `/san-pham/tat-ca?level=2`
                                                          : items.type ===
                                                            "Sản phẩm cấp độ 3"
                                                          ? `/san-pham/tat-ca?level=3`
                                                          : items.type ===
                                                            "Sản phẩm có nhiệm vụ kèm theo"
                                                          ? `/san-pham/tat-ca?option=quest`
                                                          : items.type ===
                                                            "Sản phẩm cho phép chạy đêm"
                                                          ? `/san-pham/tat-ca?option=nightmode`
                                                          : `/san-pham/tat-ca?option=test`
                                                      }`}
                                                    >
                                                      <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                        <p>{items.type}</p>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {" "}
                                      {sort.length > 0 && (
                                        <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                          <div className="">
                                            {sort.map(
                                              (items: any, idx: number) => (
                                                <div key={idx}>
                                                  <div className=" group/lv2    relative font-light     border-b">
                                                    <Link
                                                      href={`${`/san-pham/${items.typeUrl}`}`}
                                                    >
                                                      <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                        <p>{items.type}</p>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#383aaf] text-white shadow-md h-max">
          <div className=" grid grid-cols-7 w-[1300px] mx-auto items-center ">
            <Link href={`/`} className="h-24 p-1">
              <img
                src={TradeMarkData.websiteLogo}
                alt="logo"
                className="h-full cursor-pointer"
              />
            </Link>
            <div className="col-span-5 flex justify-center flex-col items-center gap-2 py-2 ">
              <div className="flex-col flex justify-center items-center gap-2">
                <h2 className="font-normal text-[30px] uppercase">
                  Nệm việt á
                </h2>
                <div className=" relative">
                  <div className="border rounded-full border-white flex items-center ">
                    <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                      <input
                        type="text"
                        className="outline-none mr-2 col-span-6 bg-[#383aaf]"
                        placeholder="Tìm kiếm sản phẩm"
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
                    <div
                      className="bg-white py-3 px-6 text-black   rounded-r-full cursor-pointer"
                      onClick={() => HandleSearch()}
                    >
                      <FaSearch />
                    </div>
                  </div>
                  {search && (
                    <div className="absolute w-full bg-blue-100 top-full flex flex-col shadow-inner z-50 mt-2">
                      <div className=" flex flex-col">
                        {searchRs.map((product: any, idx: number) => (
                          <div
                            onClick={() => HandleSearch()}
                            key={idx}
                            className="cursor-pointer p-2 hover:bg-blue-200"
                          >
                            {product.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-10  mt-2">
                {HeaderItems.map((item: any, idx: number) => (
                  <div className="relative group/main " key={idx}>
                    <Link
                      className="hover:text-white duration-300 flex items-center text-[20px] gap-2 font-light"
                      href={`/${item.value}`}
                    >
                      <p> {item.label}</p>
                      {(item.label === "Sản phẩm" ||
                        item.label === "Giới thiệu") && (
                        <AiOutlineDown className="text-[10px] group-hover/main:rotate-180 duration-300 text-white" />
                      )}
                    </Link>
                    <div className="h-[2px] bg-gray-400 w-0 group-hover/main:w-full duration-300 mt-3 "></div>
                    {item.label === "Giới thiệu" && (
                      <div className="flex flex-col top-8 absolute">
                        <div className="bg-none w-full h-4"></div>
                        <div className=" top-9 hidden group-hover/main:block duration-300">
                          <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                            {IntroductionItems.map(
                              (items: any, idx: number) => (
                                <Link
                                  key={idx}
                                  href={`/bai-viet/${items.value}`}
                                  className="w-max  border-b"
                                >
                                  <p className="py-2 px-4 hover:text-maingreen duration-300 text-black">
                                    {" "}
                                    {items.label}
                                  </p>
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.label === "Sản phẩm" && (
                      <div className="flex flex-col top-8 absolute z-50">
                        <div className="bg-none w-full h-4"></div>
                        <div className=" top-9 hidden group-hover/main:block duration-300">
                          <div className=" flex flex-col bg-white shadow-md border-t-2 border-gray-500 ">
                            {TypeProductItems.map((items: any, idx: number) => {
                              const sort = productTypes.filter(
                                (item: any) => item.parentUrl === items.value
                              );

                              return (
                                <div
                                  key={idx}
                                  className=" group/lv1 relative  border-b"
                                >
                                  <Link
                                    href={`/san-pham/${items.value}`}
                                    className="  border-b"
                                  >
                                    <div className="py-2 px-4 hover:bg-gray-100 hover:text-blue-400 duration-300  font-light flex items-center justify-between w-full">
                                      {" "}
                                      <p className="py-2 w-max px-4 hover:text-maingreen duration-300 text-black">
                                        {items.label}
                                      </p>
                                      {sort.length > 0 && (
                                        <AiFillCaretRight
                                          className={` rotate-90 group-hover/lv1:rotate-0 duration-500 `}
                                        />
                                      )}
                                    </div>
                                  </Link>
                                  {items.label === "Khác" ? (
                                    <>
                                      {" "}
                                      {sort.length > 0 && (
                                        <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                          <div className="">
                                            {sort.map(
                                              (items: any, idx: number) => (
                                                <div key={idx}>
                                                  <div className=" group/lv2    relative font-light     border-b">
                                                    <Link
                                                      href={`${
                                                        items.type ===
                                                        "Sản phẩm cấp độ 1"
                                                          ? `/san-pham/tat-ca?level=1`
                                                          : items.type ===
                                                            "Sản phẩm cấp độ 2"
                                                          ? `/san-pham/tat-ca?level=2`
                                                          : items.type ===
                                                            "Sản phẩm cấp độ 3"
                                                          ? `/san-pham/tat-ca?level=3`
                                                          : items.type ===
                                                            "Sản phẩm có nhiệm vụ kèm theo"
                                                          ? `/san-pham/tat-ca?option=quest`
                                                          : items.type ===
                                                            "Sản phẩm cho phép chạy đêm"
                                                          ? `/san-pham/tat-ca?option=nightmode`
                                                          : `/san-pham/tat-ca?option=test`
                                                      }`}
                                                    >
                                                      <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                        <p>{items.type}</p>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {" "}
                                      {sort.length > 0 && (
                                        <div className="hidden group-hover/lv1:block absolute top-0 left-full mt-0 w-max bg-mainred  shadow-lg">
                                          <div className="">
                                            {sort.map(
                                              (items: any, idx: number) => (
                                                <div key={idx}>
                                                  <div className=" group/lv2    relative font-light     border-b">
                                                    <Link
                                                      href={`${`/san-pham/${items.typeUrl}`}`}
                                                    >
                                                      <div className="py-4 px-10 hover:bg-gray-100 hover:text-blue-400 duration-300  bg-white font-light flex items-center justify-between w-full">
                                                        <p>{items.type}</p>
                                                      </div>
                                                    </Link>
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex gap-4 flex-col">
                <div
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(`tel:${ContactData.phone}`, "_blank")
                  }
                >
                  <FaPhoneVolume /> <p> {ContactData.phone}</p>{" "}
                </div>
                <div
                  className="flex items-center gap-2 w-max"
                  onClick={() =>
                    window.open(`mailto:${ContactData.gmail}`, "_blank")
                  }
                >
                  <CiMail />
                  <p>{ContactData.gmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="d:hidden p:block bg-mainblue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-mainblue text-white shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <div className="h-[84px]">
              <img
                src={TradeMarkData.websiteLogo}
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
                    className="outline-none mr-2 col-span-6"
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
                <div className="bg-orange-500 py-3 px-6 text-white rounded-r-full cursor-pointer">
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
            <div>
              <div className="p-5">
                <img src={TradeMarkData.websiteLogo} alt="logo" />
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
