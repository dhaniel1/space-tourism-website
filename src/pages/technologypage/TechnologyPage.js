import React, { useState } from "react";
import style from "./TechnologyPage.module.css";
import { technologyPageContent as pageContent } from "../../assets/ContentData";
import { Vehicle, Capsule, Spaceport } from "../../assets/ContentData";
function TechnologyPage() {
  const [section, setSection] = useState(pageContent[0]);

  function setSectionHandler(id) {
    const filteredContent = pageContent.filter(
      (pageContent) => pageContent.header === id
    )[0];
    setSection(filteredContent)
  }

  return (
    <div className={style.main}>
      <div className={style.content__body}>
        <p>
          <span>03</span>Space launch 101
        </p>
        <div className={style.content__body__container}>
          <div className={style.content__body__container__tabs}>
            <div onClick={() => setSectionHandler("Launch Vehicle")}>
              <p>1</p>
            </div>
            <div onClick={() => setSectionHandler("Spaceport")}>
              <p>2</p>
            </div>
            <div onClick={() => setSectionHandler("Space Capsule")}>
              <p>3</p>
            </div>
          </div>
          <div className={style.content__body__container__writeup}>
            <h5 className={style.intro}>the terminology...</h5>
            <h1 className={style.header}>{section.header}</h1>
            <p className={style.description}>{section.description}</p>
          </div>
          <div className={style.content__body__content__image}>
            <img src={section.image} alt="Crew Memmbers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
