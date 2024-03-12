import React from "react";
import "./sample1.css";
import Personal from "../../Components/Sample1/Personal/Personal";
import Art from "../../Components/Sample1/Art/Art";
import MainSection from "../../Components/Sample1/MainSection/MainSection";
import AchivementCard from "../../Components/Sample1/Achivement/AchivementCard";

const Sample1 = () => {
  return (
    <div className="main2">
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
          <p>SMALL STEPS</p>
        </div>
        <div className="introMedium">
          <p><span>Achievements</span></p>
        </div>
        <div className="personalContainer">
          {
            achValue && achValue.map((val,key)=>(
              <AchivementCard 
                 tag={val.tag}
                 tagBg={val.tagBg}
                 title={val.title}
                 desc={val.desc}
                 img={val.img}
              />
            ))
          }
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

const achValue=[
  {
    tag:"Design and Development",
    tagBg:"lightgrey",
    title:"Securing first place in Codefest 2",
    desc:"Primary task is to redesign and develop the Hostinger India's home page.",
    img:"Assets/Sample1/ach.webp",
  },
  {
    tag:"Portfolio Showcase",
    tagBg:"lightgrey",
    title:"Securing Third Place in Hackathon 🍁🍂 Portfolio Edition",
    desc:"Task is to showcase best 'quality' portfolios.",
    img:"Assets/Sample1/ach2.webp",
  },
  {
    tag:"Design and Development",
    tagBg:"lightyellow",
    title:"Designing a Hackathon platform - codebattles.dev",
    desc:"Task is to create a design template for the platform.",
    img:"Assets/Sample1/ach3.webp",
  },
  {
    tag:"Design and Development",
    tagBg:"lightgrey",
    title:"Designing a Bengali Music Album - 'Kumir Danga'",
    desc:"Create the entire design for music album and all.",
    img:"Assets/Sample1/arc4.webp",
  },
]