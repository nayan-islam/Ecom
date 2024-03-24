import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddTOCart = () => {
  let [Quantity, setQuantity] = useState(1);
  return (
    <div className="py-20">
      <div className="container pb-10">
        <p className="font-Josefin text-xs text-gray-500">Home - cart</p>
      </div>
      <div className="container pb-10 text-center">
        <h3 className="font-Josefin font-semibold text-2xl text-gray-800 mb-2">
          Shopping Cart
        </h3>
        <p className="font-Josefin text-base text-gray-600">
          You are eligible for Free Shipping.
        </p>
      </div>
      <div className="container pb-10 flex gap-x-5">
        <div className="left w-3/5  ">
          <table className="w-full border">
            <tr className="flex gap-x-3 p-3">
              <td className="border border-gray-300 p-1 w-28 h-28 ">
                <img className="w-full h-full object-contain" src="" alt="" />
              </td>
              <td className="flex items-center pr-6 w-full">
                <table className="w-full">
                  <tr className="flex items-center justify-between">
                    <td className=" p-1 flex items-center ">
                      <table className="text-left">
                        <tr>
                          <td className="font-Josefin text-base text-gray-600">
                            Product Name
                          </td>
                        </tr>
                        <tr>
                          <td className="font-Josefin font-semibold text-xl text-gray-800">
                            iphone 8
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td className=" p-1 flex items-center ">
                      <table className="text-left">
                        <tr>
                          <td className="font-Josefin text-base text-gray-600">
                            Size
                          </td>
                        </tr>
                        <tr>
                          <td className="font-Josefin font-semibold text-xl text-gray-800">
                            XL
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td className=" p-1 flex items-center ">
                      <table className="text-left">
                        <tr>
                          <td className="font-Josefin text-base text-gray-600">
                            Stock
                          </td>
                        </tr>
                        <tr>
                          <td className="font-Josefin font-semibold text-xl text-green-800">
                            In Stock
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td className=" p-1 flex items-center ">
                      <table className="text-left">
                        <tr>
                          <td className="font-Josefin text-base text-gray-600">
                            Quantity
                          </td>
                        </tr>
                        <tr>
                          <td className="font-Josefin font-semibold text-xl flex items-center">
                            <span
                              className="cursor-pointer inline-block text-xs p-1 text-gray-300 border hover:text-[#0a2623] transition-all duration-300"
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
                            <span className="inline-block px-2">
                              {Quantity}
                            </span>
                            <span
                              className="cursor-pointer inline-block text-xs p-1 text-gray-300 border hover:text-[#0a2623] transition-all duration-300"
                              onClick={() => setQuantity(Quantity + 1)}
                            >
                              <FaPlus />
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td className=" p-1 flex items-center ">
                      <table className="text-left">
                        <tr>
                          <td className="font-Josefin text-base text-gray-600">
                            Price
                          </td>
                        </tr>
                        <tr>
                          <td className="font-Josefin font-semibold text-xl text-gray-800">
                            $1254
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div className="left w-2/5 px-10 ">
          <div className="summery border border-gray-300 py-7 px-9">
            <h3 className="font-Josefin font-semibold text-xl text-gray-800 mb-2">
              Order Summary
            </h3>
            <ul className="rounded-md bg-gray-200 pt-2 overflow-hidden mb-5">
              <li className=" flex items-center justify-between px-3 py-1  text-gray-800">
                <span>Subtotal</span>
                <span className="font-semibold">$2,090</span>
              </li>
              <li className=" flex items-center justify-between px-3 py-1  text-gray-800">
                <span>Discount</span>
                <span className="font-semibold text-red-800">-$10</span>
              </li>
              <li className=" flex items-center justify-between px-3 py-1  text-gray-800">
                <span>Tax</span>
                <span className="font-semibold">15%</span>
              </li>
              <li className=" flex items-center justify-between px-3 py-1  text-gray-800">
                <span>Shipping </span>
                <span className="font-semibold">$0</span>
              </li>
              <li className=" flex items-center justify-between px-3 py-2 mt-3  text-gray-800 bg-slate-300">
                <span className="font-semibold">Total </span>
                <span className="font-bold">$2546</span>
              </li>
            </ul>
            <button className="w-full bg-slate-900 border border-slate-800 text-gray-200 font-Josefin font-semibold hover:bg-transparent hover:text-gray-800 py-3 rounded-md transition-all duration-300 mb-2">
              checkout
            </button>
            <button className="w-full bg-slate-900 border border-slate-800 text-gray-200 font-Josefin font-semibold hover:bg-transparent hover:text-gray-800 py-3 rounded-md transition-all duration-300 mb-2">
              continue
            </button>
            <p className="font-Josefin text-xs text-gray-500 text-center">
              Tax included. Shipping calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTOCart;
