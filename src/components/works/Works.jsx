import "./works.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/writing.png",
      title: "About Me",
      desc:
        '"Hi there, I am Angel. I am a recent graduate from ECPI University. I specialize in front end development and design! This is my family, minus one elephant."',
      img:
        "./assets/family.png",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "What am I about?",
      desc:
        '"Currently, I am seeking employment as a Front End Web Developer. Outside of my full-time commitments; I work on projects using ReactJS, Node, MongoDB, and occasionally some bootstrapp CSS. I also spend lots of time with my son exploring the city of Houston."',
      img:
        "./assets/orionAndMe.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Why me?",
      desc:
        '"I’m passionate about building & designing delightful experiences with the combination of business, marketing and UX/UI design to make customers and users satisfied when they’re using products and services online."',
      img:
        "./assets/sky.png",
    },
  ];

  const handleClick = (way) => {
      way === "left"
     ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) 
     : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }


  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
   
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIosIcon className="arrow left" onClick={()=>handleClick("left")} sx={{ color: "white" }}/>
      <ArrowForwardIosIcon className="arrow right" onClick={()=>handleClick("right")} sx={{ color: "white" }}/>
    </div>
  )
}
