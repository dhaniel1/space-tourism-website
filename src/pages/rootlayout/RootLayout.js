// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
// import style from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className="body">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
