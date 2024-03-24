import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./page/Home";
import ProductView from "./page/ProductView";
import Product from "./page/Product";
import AddTOCart from "./page/AddTOCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/details" element={<ProductView />} />
      <Route path="/product/cart" element={<AddTOCart />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
