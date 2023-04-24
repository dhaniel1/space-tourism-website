// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
// import style from "./RootLayout.module.css";

/* const Layout = (props) => {
  return (
    <div className={style.container}>
      <Navbar />
      <main> {props.children}</main>
    </div>
  );
}; */

function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

/* function RootLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
} */

export default RootLayout;
