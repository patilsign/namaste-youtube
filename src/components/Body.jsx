import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
 
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
