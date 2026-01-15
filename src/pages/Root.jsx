import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css"; 

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WishlistContext from "../components/WishlistContext";

const Root = () => {
  return (
    <div>
      <NavBar />
         <WishlistContext>
        <Outlet />
      </WishlistContext>
      <Footer />
    </div>
  );
};

export default Root;
