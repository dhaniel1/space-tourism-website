import React, { useState } from "react";
import style from "./CrewPage.module.css";
import { crewPageContent as pageContent } from "../../assets/ContentData";

function CrewPage() {
  const [section, setSection] = useState(pageContent[3]);

  function setSectionHandler(id) {
    const filteredContent = pageContent.filter(
      (pageContent) => pageContent.profession === id
    )[0];
    setSection(filteredContent);
  }

  console.log(section);

  return (
    <div className={style.main}>
      <div className={style.content__body}>
        <div className={style.content__body__content}>
          <div className={style.content__body__content__writeup}>
            <p>
              <span>02</span>Meet your crew
            </p>
            <h5 className={style.profession}>{section.profession}</h5>
            <h1 className={style.name}>{section.name}</h1>
            <p className={style.description}>{section.description}</p>
            <div className={style.tabs}>
              <div
                onClick={() => setSectionHandler("Commander")}
                className={`${
                  section.profession === "Commander" ? style.active : ""
                }`}></div>
              <div
                onClick={() => setSectionHandler("Mission Specialist")}
                className={`${
                  section.profession === "Mission Specialist"
                    ? style.active
                    : ""
                }`}></div>
              <div
                onClick={() => setSectionHandler("Pilot")}
                className={` ${
                  section.profession === "Pilot" ? style.active : ""
                }`}></div>
              <div
                onClick={() => setSectionHandler("Flight Engineer")}
                className={`${
                  section.profession === "Flight Engineer" ? style.active : ""
                }`}></div>
            </div>
          </div>
          <div className={style.content__body__content__image}>
            <img src={section.image} alt="Crew Memmbers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
