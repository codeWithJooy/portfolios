import React, { useState } from "react";
import "./sample1.css";
import Personal from "../../Components/Sample1/Personal/Personal";
import Art from "../../Components/Sample1/Art/Art";
import MainSection from "../../Components/Sample1/MainSection/MainSection";
import AchivementCard from "../../Components/Sample1/Achivement/AchivementCard";
import CommonCard from "../../Components/Sample1/CommonCard/CommonCard";

const Sample1 = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const scrollToProjects = () => {
    setOpen(!open)
    const projectsSection = document.getElementById("projectsSection");
    projectsSection.scrollIntoView({ behavior: "smooth" });
    
  };
  const scrollToProjects2 = () => {
    
    const projectsSection = document.getElementById("projectsSection");
    projectsSection.scrollIntoView({ behavior: "smooth" });
    
  };
  const scrollToArt = () => {
    setOpen(!open)
    const projectsSection = document.getElementById("art");
    projectsSection.scrollIntoView({ behavior: "smooth" });
   
  };
  const scrollToHome = () => {
    setOpen(!open)
    const projectsSection = document.getElementById("home");
    projectsSection.scrollIntoView({ behavior: "smooth" });
   
  };
  return (
    <div className="main2">
      <div className="sampleHead" id="Home">
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
              <img src="Assets/Sample1/hamburger.png" onClick={toggleOpen}/>
            </div>
            {open && (
              <div className="mobileOpen">
                <div className="mobileOpenUnit" onClick={scrollToHome}>
                  <p>Home</p>
                </div>
                <div className="mobileOpenUnit" onClick={scrollToProjects}>
                  <p>Work</p>
                </div>
                <div className="mobileOpenUnit" onClick={scrollToArt}>
                  <p>Art</p>
                </div>
              </div>
            )}
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
                about frontend design & development. Also I like spend my
                leisure time Painting Potraits.
              </p>
            </div>
            <div className="introButtons">
              <button className="workButton" onClick={scrollToProjects2}>
                See My Works
              </button>
              <button className="resumeButton">My Resume</button>
            </div>
          </div>
        </div>
        <div className="headImage">
          <img src="Assets/Sample1/pattern-1.svg" />
          <div className="headLinks">
            <div className="headLinksUnitActive" onClick={scrollToHome}>
              <p>Home</p>
            </div>
            <div className="headLinksUnit" onClick={scrollToProjects}>
              <p>Works</p>
            </div>
            <div className="headLinksUnit" onClick={scrollToArt}>
              <p>Art</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme">
        <div className="introHello">
          <p>About Me</p>
        </div>
        <div className="introMedium">
          <p>
            A Small <span>Introduction</span>
          </p>
        </div>
        <div className="aboutMeContainer">
          <div className="aboutmemisc">
            <p>Art</p>
            <p>Design</p>
            <p>Development</p>
          </div>
          <div className="aboutOthers">
            <p>
              This is Shristi Das, 2021 passout hold Computer science
              Engineering from Kalyani Government Engineering College, West
              Bengal, India. Also I am a selft taught UI designer and Frontend
              developer. Also I like spend my leisure time painting.
            </p>
            <div className="aboutDo">
              <div className="aboutDoTitle">
                <p>What I like to Do</p>
              </div>
              <div className="aboutDoCards">
                <div className="aboutCard">
                  <div className="personalImage">
                    <img src="Assets/Sample1/docs.png" />
                  </div>
                  <div className="personalTitle">
                    <p>Frontend Development</p>
                  </div>
                  <div className="personalText">
                    <p>
                      Html, Css, Scss, Tailwind css, Javascript, React.js,
                      Next.js
                    </p>
                  </div>
                </div>
                <div className="aboutCard">
                  <div className="personalImage">
                    <img src="Assets/Sample1/docs.png" />
                  </div>
                  <div className="personalTitle">
                    <p>Frontend Development</p>
                  </div>
                  <div className="personalText">
                    <p>
                      Html, Css, Scss, Tailwind css, Javascript, React.js,
                      Next.js
                    </p>
                  </div>
                </div>
                <div className="aboutCard">
                  <div className="personalImage">
                    <img src="Assets/Sample1/docs.png" />
                  </div>
                  <div className="personalTitle">
                    <p>Frontend Development</p>
                  </div>
                  <div className="personalText">
                    <p>
                      Html, Css, Scss, Tailwind css, Javascript, React.js,
                      Next.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personalFav">
        <div className="introHello">
          <p>TOOLS & TECH</p>
        </div>
        <div className="introMedium">
          <p>
            My <span>Personal Favourite</span>
          </p>
        </div>
        <div className="personalContainer">
          <Personal />
          <Personal />
          <Personal />
          <Personal />
          <Personal />
        </div>
      </div>
      <div className="personalFav" id="projectsSection">
        <div className="introHello">
          <p>PROJECTS</p>
        </div>
        <div className="introMedium">
          <p>
            My <span>Latest Works </span>
          </p>
        </div>
        <div className="personalContainer">
          <CommonCard
            tag="Design and Development"
            pic="Assets/Sample1/hobby1.webp"
            header="Normalized Nerd"
            desc="Personal Portfolio"
          />
          <CommonCard
            tag="Design and Development"
            pic="Assets/Sample1/hobby2.webp"
            header="Normalized Nerd"
            desc="Personal Portfolio"
          />
          <CommonCard
            tag="Design and Development"
            pic="Assets/Sample1/hobby3.webp"
            header="Normalized Nerd"
            desc="Personal Portfolio"
          />
        </div>
      </div>

      <div className="personalFav">
        <div className="introHello">
          <p>SMALL STEPS</p>
        </div>
        <div className="introMedium">
          <p>
            <span>Achievements</span>
          </p>
        </div>
        <div className="personalContainer">
          {achValue &&
            achValue.map((val, key) => (
              <AchivementCard
                tag={val.tag}
                tagBg={val.tagBg}
                title={val.title}
                desc={val.desc}
                img={val.img}
              />
            ))}
        </div>
      </div>

      <div className="personalFav">
        <div className="introHello">
          <p>HOBBY PROJECTS</p>
        </div>
        <div className="introMedium">
          <p>
            <span>My Random Projects</span>
          </p>
        </div>
        <div className="personalContainer">
          <CommonCard
            tag="Design and Development"
            pic="Assets/Sample1/hobby1.webp"
            header="Normalized Nerd"
            desc="Personal Portfolio"
          />
          <CommonCard
            tag="Design and Development"
            pic="Assets/Sample1/hobby2.webp"
            header="Normalized Nerd"
            desc="Personal Portfolio"
          />
          <CommonCard
            tag="Design and Development"
            pic="Assets/Sample1/hobby3.webp"
            header="Normalized Nerd"
            desc="Personal Portfolio"
          />
        </div>
      </div>
      <div className="personalFav" id="art">
        <div className="introHello">
          <p>OTHER THAN TECH</p>
        </div>
        <div className="introMedium">
          <p>
            Some of my <span>Art Works</span>
          </p>
        </div>
        <div className="personalContainer">
          <Art />
          <Art />
          <Art />
          <Art />
        </div>
      </div>
      <div className="footerSection">
        <div className="footerTab">
          <div className="tabContainer">
            <div className="tabSection">
              <div className="tabSmall">
                <p>Something In Mind</p>
              </div>
              <div className="tabMain">
                <p>Lets Talk</p>
              </div>
            </div>
            <div className="tabSection">
              <div className="tabMidBold">
                <p>Drop a Mail</p>
              </div>
              <div className="tabMidBold">
                <p>enigma.abhi.ty@gmail.com</p>
              </div>
            </div>
            <div className="tabSection">
              <div className="tabMidBold">
                <p>Can Follow Me On</p>
              </div>
              <div className="tabMidBold">
                <img src="Assets/Sample1/fb.png" />
                <img src="Assets/Sample1/instagram.png" />
                <img src="Assets/Sample1/fb.png" />
                <img src="Assets/Sample1/fb.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="tabFinal">
          <p>Designed By Elevance Tech</p>
        </div>
      </div>
    </div>
  );
};

export default Sample1;

const achValue = [
  {
    tag: "Design and Development",
    tagBg: "lightgrey",
    title: "Securing first place in Codefest 2",
    desc: "Primary task is to redesign and develop the Hostinger India's home page.",
    img: "Assets/Sample1/ach.webp",
  },
  {
    tag: "Portfolio Showcase",
    tagBg: "lightgrey",
    title: "Securing Third Place in Hackathon 🍁🍂 Portfolio Edition",
    desc: "Task is to showcase best 'quality' portfolios.",
    img: "Assets/Sample1/ach2.webp",
  },
  {
    tag: "Design and Development",
    tagBg: "lightyellow",
    title: "Designing a Hackathon platform - codebattles.dev",
    desc: "Task is to create a design template for the platform.",
    img: "Assets/Sample1/ach3.webp",
  },
  {
    tag: "Design and Development",
    tagBg: "lightgrey",
    title: "Designing a Bengali Music Album - 'Kumir Danga'",
    desc: "Create the entire design for music album and all.",
    img: "Assets/Sample1/arc4.webp",
  },
];
