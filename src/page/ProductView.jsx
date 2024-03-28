import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";
const ProductView = () => {
  let [Quantity, setQuantity] = useState(1);
  let productData = useSelector((state) => state.allCart.value);
  let data=[]
  data.push(productData)



  
 
  return (
    <div className="py-20">
      <div className="container pb-10">
        <p className="font-Josefin text-xs text-gray-500">Home - Products</p>
      </div>

      {data.map((item2, index) => (
        <div key={index} className="container flex justify-between gap-x-6">
          <div className="w-1/2 h-[650px]  grid grid-cols-2 grid-rows-2 gap-4">
            {item2.images.map((item4, index) => (
              <div key={index} className="border p-2">
                <img
                  className="w-full h-full object-contain"
                  src={item4}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="w-1/2   py-7 px-8">
            <h3 className="font-Josefin text-3xl text-gray-800 font-semibold mb-2">
              {item2.title}
            </h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <span className="font-semibold mr-2">Review:</span>
                {item2.rating}
              </li>
              <li>
                <span className="font-semibold mr-2">Price:</span>
                {"$" + item2.price}
              </li>
              <li>
                <span className="font-semibold mr-2">Brand:</span>
                {item2.brand}
              </li>
              <li className="flex items-center gap-x-1">
                <span className="font-semibold mr-1">Size:</span>

                <input name="size" id="m" type="radio" />
                <label htmlFor="m">M</label>
                <input name="size" id="l" type="radio" />
                <label htmlFor="l">L</label>
                <input name="size" id="xl" type="radio" />
                <label htmlFor="xl">XL</label>
                <input name="size" id="xxl" type="radio" />
                <label htmlFor="xxl">XXL</label>
              </li>
              <li className="flex items-center gap-x-1">
                <span className="font-semibold mr-2">Quantity:</span>

                <span
                  className="cursor-pointer inline-block p-2 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300"
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
                <span className="inline-block px-2">{Quantity}</span>
                <span
                  className="cursor-pointer inline-block p-2 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300"
                  onClick={() => setQuantity(Quantity + 1)}
                >
                  <FaPlus />
                </span>
              </li>
              <li>
                <span className="font-semibold mr-2">In stock:</span> Available
              </li>
              <li className="flex items-center gap-x-2">
                <button className="py-2 px-4 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300">
                  Add to Wish List
                </button>
                <button
                 
                  className="py-2 px-4 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300"
                >
                  Add to Cart
                </button>
              </li>
              <li>
                <p className="font-semibold">Description</p>
                <p className="p-2">{item2.description}</p>
              </li>
              <li className="font-semibold">Add a Review</li>
              <li className="grid grid-cols-2 gap-2">
                <input
                  className="py-3 px-4 bg-transparent border border-gray-400 "
                  type="text"
                  placeholder="Your name here"
                />
                <input
                  className="py-3 px-4 bg-transparent border border-gray-400 "
                  type="email"
                  placeholder="Your email here"
                />
                <input
                  className="py-3 px-4 bg-transparent border border-gray-400 col-span-2"
                  type="text"
                  placeholder="Your review here"
                />
                <input
                  className="py-3 px-4 bg-green-800 hover:bg-green-900 text-center col-span-2 text-gray-300 font-bold"
                  type="button"
                  value="Post"
                />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductView;
