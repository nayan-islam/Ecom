import React, { useEffect, useState } from "react";
import ProductItem from "../layer/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { sajib } from "../CartRedux/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((el) => {
        setData(el.products);
      });
  }, []);

  let handleClick = (item) => {
    dispatch(sajib(item));
    localStorage.setItem("added-items", JSON.stringify(item));
    navigate("/product/details");
  };

  // let items = useSelector((state) => state.allCart.pItem);
  // console.log(items);

  return (
    <div className="pt-20">
      <div className="container">
        <div className="container pb-10">
          <p className="font-Josefin text-xs text-gray-500">Home - Products</p>
        </div>
        <div className="main flex justify-between gap-x-6">
          <div className="leftBar w-[24%] py-7 bg-slate-600"></div>
          <div className="flex gap-x-[1.3%] gap-y-5 flex-wrap w-full">
            {data.map(
              (item, index) =>
                index < 11 && (
                  <div
                    className="w-[24%] "
                    key={index}
                    onClick={() => handleClick(item)}
                  >
                    <ProductItem
                      src={item.thumbnail}
                      title={item.title}
                      brand={item.brand}
                      price={"$" + item.price}
                      stock={"Stock: " + item.stock}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
