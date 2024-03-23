import React from "react";
import { FaShoppingCart, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = ({ src, alt, title, brand, price, stock }) => {
  return (
    <div className="w-[24%] ">
      <div className="image border border-[#d4e4e3] w-full h-72  relative overflow-hidden flex justify-center items-center">
        <img
          className="w-full h-full object-contain hover:scale-110 transition-all duration-500"
          src={src}
          alt={alt}
        />
        <div className="icon absolute left-3 top-3 grid grid-cols-2 grid-rows-2 gap-1">
          <Link className="h-10 w-10 text-base bg-primery text-white hover:text-primery flex justify-center items-center hover:bg-white transition-all duration-300 border border-primery">
            <FaShoppingCart />
          </Link>
          <Link className="h-10 w-10 text-base bg-primery text-white hover:text-primery flex justify-center items-center hover:bg-white transition-all duration-300 border border-primery">
            <FaHeart />
          </Link>
          <p className="h-10 col-span-2 text-base bg-primery text-white hover:text-primery flex justify-center items-center hover:bg-white transition-all duration-300 border border-primery">
            Stock: {stock}
          </p>
        </div>
      </div>
      <div className="text py-3 px-4 bg-[#d4e4e3]">
        <h3 className="text-primery text-xl font-semibold hover:text-hover transition-all duration-300">
          {title}
        </h3>
        <p className="mt-1 flex items-center justify-between text-[#4d4d4d] text-lg font-normal">
          {brand} <span className="font-semibold">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
