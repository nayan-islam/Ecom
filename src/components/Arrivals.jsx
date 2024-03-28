import React, { useEffect, useState } from "react";
import ProductItem from "../layer/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { sajib } from "../CartRedux/CartSlice";
import { useNavigate } from "react-router-dom";


const Arrivals = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [data, setData] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((el) => {
        setData(el.products);
      });
  }, []);

  let handleClick = (item) => {
    dispatch(sajib({
      ...item,
      quantity:1
    }))
    localStorage.setItem("added-items", JSON.stringify({ ...item, quantity :1}));
    navigate("/product/details");
  };


  return (
    <div className="pt-20">
      <div className="container">
        <div className="header">
          <h2 className="text-3xl font-Josefin font-semibold mb-5">
            New Arrivals
          </h2>
        </div>
        <div className="flex gap-x-[1.3%] gap-y-5 flex-wrap">
          {data?.map(
            (item, index) =>
              index < 11 && (
                <div
                  className="w-[24%] "
                  key={index}
                >
                  <ProductItem
                    jekono={handleClick}
                    info={item}
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
  );
};

export default Arrivals;
