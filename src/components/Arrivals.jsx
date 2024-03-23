import React, { useEffect, useState } from 'react'
import ProductItem from '../layer/ProductItem'

const Arrivals = () => {

  let [data, setData] = useState()
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((el)=>{
        setData(el.products);
      });
  },[])
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
                <ProductItem
                  key={index}
                  src={item.thumbnail}
                  title={item.title}
                  brand={item.brand}
                  price={"$" + item.price}
                  stock={item.stock}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Arrivals