import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet className='py-24' />
      <Footer/>
    </>
  );
};

export default Rootlayout;
