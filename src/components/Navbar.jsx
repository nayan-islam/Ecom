import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Li from "../layer/Li";
import { FaShoppingCart, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((el) => {
        setData(el.products);
      });
  }, []);

  return (
    <>
      <header className="bg-[#0a2623] py-1">
        <div className="container flex justify-between items-center">
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
                className="text-[#d4e4e3] text-base font-semibold hover:text-[#a0e0dc] transition-all duration-300"
                href="/"
                liText={<FaShoppingCart />}
              />
              <Li
                className="text-[#d4e4e3] text-2xl font-semibold hover:text-[#a0e0dc] transition-all duration-300"
                href="/"
                liText={<CgProfile />}
              />
            </ul>
          </div>
        </div>
      </header>
      {/* -------------------------------------------------------------------------------------------------------------------------------- */}
      <nav className="bg-[#d4e4e3] py-3">
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
                      placeholder="Furniture...."
                      className="bg-transparent border border-primery/25 px-4 py-1 w-[350px] outline-none"
                    />
                    <IoSearch className="absolute right-4 top-1/2 translate-y-[-50%]" />

                    <div className="w-full bg-orange-200 absolute right-0 top-[180%] z-10">
                      {/* {data
                        .filter((el) => {
                          return search.toLowerCase() === ""
                            ? ""
                            : el.title
                                .toLowerCase()
                                .includes(search.toLowerCase());
                        })
                        .map((item, index) => (
                          <p key={index}>{item.title}</p>
                          // No results were found for your search
                        ))} */}
                      {search.length > 0 ? (
                        data.filter((item) =>
                          item.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ).length > 0 ? (
                          data.map((item3) => (
                            <p key={item3.id}>{item3.title}</p>
                          ))
                        ) : (
                          <p>No data found</p>
                        )
                      ) : (
                        <p></p>
                      )}
                    </div>
                  </>
                }
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
