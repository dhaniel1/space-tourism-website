import React from "react";
import logo from "../../assets/shared/logo.svg";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

function Navbar() {
  return (
    <header className={style.navbar}>
      <nav className={style.navContainer}>
        <Logo />
        <div className={style.menubtn}>
          <div className={style.btn_line}></div>
          <div className={style.btn_line}></div>
          <div className={style.btn_line}></div>
        </div>
        <div className={`${style.navContainer__listItemsContainer}`}>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navContainer__listItems} ${style.active}`
                    : `${style.navContainer__listItems}`
                }>
                Home <span>00</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/destination"}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navContainer__listItems} ${style.active}`
                    : `${style.navContainer__listItems}`
                }>
                Destination <span>01</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/crew"}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navContainer__listItems} ${style.active}`
                    : `${style.navContainer__listItems}`
                }>
                Crew <span>02</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/technology"}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navContainer__listItems} ${style.active}`
                    : `${style.navContainer__listItems}`
                }>
                Technology <span>03</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
