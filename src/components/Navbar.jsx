import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Li from "../layer/Li";
import {
  FaShoppingCart,
  FaHeart,
  FaPhoneAlt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import { useDispatch } from "react-redux";
import { sajib } from "../CartRedux/CartSlice";

const Navbar = () => {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");
  let [Quantity, setQuantity] = useState(1);
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let cart = useRef();
  let cartInfo = useRef();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((el) => {
        setData(el.products);
      });
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cart.current.contains(e.target)) {
        setShow(!show);
      } else {
        setShow(false);
      }

      if (cartInfo.current.contains(e.target)) {
        setShow(true);
      }
    });
  }, [show]);

  return (
    <div className="fixed w-full top-0 left-0 z-30">
      <header className="bg-[#0a2623]   ">
        <div className="container flex justify-between items-center py-1 relative ">
          <div className="headerLeft flex items-center gap-x-10">
            <Link
              to="mailto:info.havetic@gmail.com"
              className="font-Josefin text-[#d4e4e3] text-xs flex items-center gap-x-2"
            >
              <MdEmail /> <p>info.havetic@gmail.com</p>
            </Link>
            <Link
              to="tel:+8801900000001"
              className="font-Josefin text-[#d4e4e3] text-xs flex items-center gap-x-2"
            >
              <FaPhoneAlt /> <p>+8801900000001</p>
            </Link>
          </div>
          <div className="headerMenu">
            <ul className="flex gap-x-5 items-center">
              <Li
                className="text-[#d4e4e3] text-base font-semibold hover:text-[#a0e0dc] transition-all duration-300"
                href="/"
                liText={<FaHeart />}
              />
              <Li
                nayan={cart}
                className="text-[#d4e4e3] text-base font-semibold hover:text-[#a0e0dc] transition-all duration-300"
                href="#"
                liText={<FaShoppingCart />}
              />
              <Li
                className="text-[#d4e4e3] text-2xl font-semibold hover:text-[#a0e0dc] transition-all duration-300"
                href="/"
                liText={<CgProfile />}
              />
            </ul>
          </div>

          <div
            ref={cartInfo}
            className={`cart w-96 border border-gray-300  backdrop-blur-lg bg-white/30 absolute z-[-1] right-0 top-0  transition-all duration-500 ${
              show ? "translate-y-0 top-full" : "translate-y-[-100%]"
            }`}
          >
            <table className="w-full ">
              <thead className="w-full">
                <tr className="flex gap-x-3 p-2">
                  <td className="border border-gray-300 p-0.5 w-12 h-12 ">
                    <img
                      className="w-full h-full object-contain"
                      src=""
                      alt=""
                    />
                  </td>
                  <td className="flex items-start w-full">
                    <table className="w-full">
                      <thead className="w-full">
                        <tr className="flex items-start justify-between">
                          <td className=" p-1 flex items-start ">
                            <table className="text-left">
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin text-xs text-gray-600">
                                    Product Name
                                  </td>
                                </tr>
                              </thead>
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin font-semibold text-sm text-gray-800">
                                    iphone 8
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </td>
                          <td className=" p-1 flex items-center ">
                            <table className="text-left">
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin text-xs text-gray-600">
                                    Size
                                  </td>
                                </tr>
                              </thead>
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin font-semibold text-sm text-gray-800">
                                    XL
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </td>
                          <td className=" p-1 flex items-center ">
                            <table className="text-left">
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin text-xs text-gray-600">
                                    Stock
                                  </td>
                                </tr>
                              </thead>
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin font-semibold text-sm text-green-800">
                                    In Stock
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </td>
                          <td className=" p-1 flex items-center ">
                            <table className="text-left">
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin text-xs text-gray-600">
                                    Quantity
                                  </td>
                                </tr>
                              </thead>
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin font-semibold text-sm flex items-center">
                                    <span
                                      className="cursor-pointer inline-block text-xs p-0.5 text-gray-300 border hover:text-[#0a2623] transition-all duration-300"
                                      onClick={() =>
                                        setQuantity((data) => {
                                          if (data >= 2) {
                                            return data - 1;
                                          } else {
                                            return 1;
                                          }
                                        })
                                      }
                                    >
                                      <FaMinus />
                                    </span>
                                    <span className="inline-block px-1">
                                      {Quantity}
                                    </span>
                                    <span
                                      className="cursor-pointer inline-block text-xs p-0.5 text-gray-300 border hover:text-[#0a2623] transition-all duration-300"
                                      onClick={() => setQuantity(Quantity + 1)}
                                    >
                                      <FaPlus />
                                    </span>
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </td>
                          <td className=" p-1 flex items-center ">
                            <table className="text-left">
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin text-xs text-gray-600">
                                    Price
                                  </td>
                                </tr>
                              </thead>
                              <thead className="w-full">
                                <tr>
                                  <td className="font-Josefin font-semibold text-sm text-gray-800">
                                    $1254
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </td>
                          <td className=" p-1 flex items-center ">
                            <RxCross2 className="cursor-pointer" />
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </header>
      {/* -------------------------------------------------------------------------------------------------------------------------------- */}
      <nav className="bg-[#d4e4e3] py-3 relative z-[-2]">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link
              to="/"
              className="font-Josefin text-primery text-3xl font-extrabold"
            >
              Logo
            </Link>
          </div>
          <div className="menu">
            <ul className="flex gap-x-8 items-center">
              <Li
                className="text-primery text-base font-semibold hover:text-hover transition-all duration-300"
                href="/"
                liText="Home"
              />
              <Li
                className="text-primery text-base font-semibold hover:text-hover transition-all duration-300  "
                href="/"
                liText={
                  <p className="flex items-center gap-x-2">
                    Category <IoIosArrowDown />
                  </p>
                }
                LiClassName="relative group"
                child={
                  <>
                    <ul className="bg-[#d4e4e3] absolute left-0 top-full z-10 pt-6 pb-4 px-3 flex flex-col  gap-y-2 w-[200px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                      <Li
                        className="text-primery text-base font-semibold hover:text-hover transition-all duration-300 border-b border-black/10 py-1 px-2 block !w-full"
                        href="/"
                        liText="Electronics"
                      />

                      <Li
                        className="text-primery text-base font-semibold hover:text-hover transition-all duration-300 border-b border-black/10 py-1 px-2 block !w-full"
                        href="/"
                        liText="Clothes"
                      />

                      <Li
                        className="text-primery text-base font-semibold hover:text-hover transition-all duration-300 border-b border-black/10 py-1 px-2 block !w-full"
                        href="/"
                        liText="Bags"
                      />

                      <Li
                        className="text-primery text-base font-semibold hover:text-hover transition-all duration-300  py-1 px-2 block !w-full"
                        href="/"
                        liText="Home appliances"
                      />
                    </ul>
                  </>
                }
              />
              <Li
                className="text-primery text-base font-semibold hover:text-hover transition-all duration-300"
                href="/"
                liText="Product"
              />
              <Li
                className="text-primery text-base font-semibold hover:text-hover transition-all duration-300"
                href="/"
                liText="Cart"
              />
              <Li
                className="text-primery text-base font-semibold hover:text-hover transition-all duration-300"
                href="/"
                liText="Contact"
              />
              <Li
                className="text-primery text-base font-semibold hover:text-hover transition-all duration-300 relative"
                href="#"
                liText={
                  <>
                    <input
                      onChange={(element) => setSearch(element.target.value)}
                      type="text"
                      value={search}
                      placeholder="Furniture...."
                      className="bg-transparent border border-primery/25 px-4 py-1 w-[350px] outline-none"
                    />
                    <IoSearch className="absolute right-4 top-1/2 translate-y-[-50%]" />

                    {search && (
                      <div className="w-full border border-gray-300  backdrop-blur-2xl bg-white/50 py-3 px-5 absolute right-0 top-[180%] z-10">
                        {search.length > 0 ? (
                          data.filter((item) =>
                            search.toLowerCase() === ""
                              ? ""
                              : item.title
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                          ).length > 0 ? (
                            data
                              .filter((item) =>
                                search.toLowerCase() === ""
                                  ? ""
                                  : item.title
                                      .toLowerCase()
                                      .includes(search.toLowerCase())
                              )
                              .map((item) => (
                                <p
                                  onClick={() => handleClick(item)}
                                  key={item.id}
                                >
                                  {item.title}
                                </p>
                              ))
                          ) : (
                            <p>No data found</p>
                          )
                        ) : (
                          <p></p>
                        )}
                      </div>
                    )}
                  </>
                }
              />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
