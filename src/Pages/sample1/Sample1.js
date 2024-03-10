import React from "react";
import "./sample1.css";

const Sample1 = () => {
  return (
    <div className="main">
      <div className="sampleHead">
        <div className="headIntro">
          <div className="sampleHeadName">
            <p>Shristi Das</p>
          </div>

          <div className="introContainer">
            <div className="introHello">
              <p>HELLO AND WELCOME</p>
            </div>
            <div className="introFormal">
              <p>
                I’m
                <span> Sujoy, UI Designer</span> and{" "}
                <span>Frontend Developer .</span>
              </p>
            </div>
            <div className="introFormalSmall">
              <p>
                I design and build beautiful websites. I have been passionate
                about frontend design & development. Also I like spend my
                leisure time Painting Potraits.
              </p>
            </div>
            <div className="introButtons">
              <button>See My Works</button>
              <button>My Resume</button>
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
      <div className="personalFav">
        <div className="introHello">
          <p>TOOLS & TECH</p>
        </div>
        <div className="introFormal">
          <p>My <span>Personal Favourite</span></p>
        </div>
        <div className="personalContainer">
          <div className="personalCard">
            <div className="personalImage">
              <img src="Assets/Sample1/docs.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample1;
