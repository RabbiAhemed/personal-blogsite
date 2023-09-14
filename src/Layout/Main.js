import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Topbar from "../Components/Topbar/Topbar";
const Main = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
