import React from "react";

const MainSection = () => {
  return (
    <div className="sampleHead">
      <div className="headIntro">
        <img src="Assets/Sample1/pattern-1.svg" className="introBg" />
        <div className="sampleHeadName">
          <p>Shristi Das</p>
        </div>
        <div className="mobileHeader">
          <div className="mobileName">
            <p>Shristi Das</p>
          </div>
          <div className="mobileHamburger">
            <img src="Assets/Sample1/hamburger.png" />
          </div>
        </div>
        <div className="introContainer">
          <div className="introHello">
            <p>HELLO AND WELCOME</p>
          </div>
          <div className="introFormal">
            <p>
              I’m
              <span> Shristi Das, UI Designer</span> and{" "}
              <span>Frontend Developer .</span>
            </p>
          </div>
          <div className="introFormalSmall">
            <p>
              I design and build beautiful websites. I have been passionate
              about frontend design & development. Also I like spend my leisure
              time Painting Potraits.
            </p>
          </div>
          <div className="introButtons">
            <button className="workButton">See My Works</button>
            <button className="resumeButton">My Resume</button>
          </div>
        </div>
      </div>
      <div className="headImage">
        <img src="Assets/Sample1/pattern-1.svg" />
        <div className="headLinks">
          <div className="headLinksUnitActive">
            <p>Home</p>
          </div>
          <div className="headLinksUnit">
            <p>Works</p>
          </div>
          <div className="headLinksUnit">
            <p>Art</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
