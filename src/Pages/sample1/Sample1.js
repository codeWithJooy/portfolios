import React from "react";
import "./sample1.css";
import Personal from "../../Components/Sample1/Personal/Personal";
import Art from "../../Components/Sample1/Art/Art";
import MainSection from "../../Components/Sample1/MainSection/MainSection";

const Sample1 = () => {
  return (
    <div className="main">
      <MainSection />
      <div className="personalFav">
        <div className="introHello">
          <p>TOOLS & TECH</p>
        </div>
        <div className="introMedium">
          <p>My <span>Personal Favourite</span></p>
        </div>
        <div className="personalContainer">
           <Personal />
           <Personal />
           <Personal />
           <Personal />
           <Personal />
        </div>
      </div>
      <div className="personalFav">
        <div className="introHello">
          <p>OTHER THAN TECH</p>
        </div>
        <div className="introMedium">
          <p>Some of my <span>Art Works</span></p>
        </div>
        <div className="personalContainer">
          <Art />
          <Art />
          <Art />
          <Art />
        </div>
      </div>
    </div>
  );
};

export default Sample1;
