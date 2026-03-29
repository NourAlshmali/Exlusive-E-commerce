import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css"; 

import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer";


const Root = () => {
  return (
    <div>
      <NavBar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
