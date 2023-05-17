import React, { useState } from "react";
import style from "./DestinationPage.module.css";
import { destinationPageContent as pageContent } from "../../assets/ContentData";

function DestinationPage() {
  const [section, setSection] = useState(pageContent[0]);

  function contentHandler(id) {
    const filteredContent = pageContent.filter(
      (content) => content.header === id
    )[0];
    setSection(filteredContent);
  }

  return (
    <div className={style.main}>
      <div className={style.main__container}>
        <div className={style.main__container__sub}>
          <div className={style.main__container__image}>
            <h1 className={style.main__container__h1}>
              <span>01</span>Pick your destination
            </h1>
            <img src={section.image} alt="a moon" />
          </div>
          <div className={style.main__container__writeup__container}>
            <div className={style.main__container__tabs}>
              <div
                onClick={() => contentHandler("Moon")}
                className={` ${section.header === "Moon" ? style.active : ""}`}>
                Moon
              </div>
              <div
                onClick={() => contentHandler("Mars")}
                className={`${section.header === "Mars" ? style.active : ""}`}>
                Mars
              </div>
              <div
                onClick={() => contentHandler("Europa")}
                className={`${
                  section.header === "Europa" ? style.active : ""
                }`}>
                Europa
              </div>
              <div
                onClick={() => contentHandler("Titan")}
                className={`${section.header === "Titan" ? style.active : ""}`}>
                Titan
              </div>
            </div>
            <div className={style.main__container__writeup}>
              <h1>{section.header}</h1>
              <p>{section.body}</p>
            </div>
            <div className={style.kinematics}>
              <div>
                <h5>Avg distance</h5>
                <p>{section.distance}</p>
              </div>
              <div>
                <h5>est. travel time</h5>
                <p>{section.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
