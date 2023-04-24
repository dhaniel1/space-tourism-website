import React from "react";
import style from "./HomePage.module.css";
// import { Outlet } from "react-router-dom";
function WriteUp() {
  return (
    <div className={style.main__container__writeup}>
      <p className={style.header}>
        So you want to travel to <br /> <span>space</span>
      </p>
      <p className={style.body}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div className={style.main}>
        <div className={style.main_container}>
          <WriteUp />
          <div className={style.main__container__explore}>
            <p>explore</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
