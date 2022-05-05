/* eslint-disable react-hooks/rules-of-hooks */
import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from "ityped";
import React, { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Designer", "Problem Solver"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/meLarge.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Angel Casiano</h1>
          <React.StrictMode>
          <h3>
            Front End <span ref={textRef}></span>
          </h3>
          </React.StrictMode>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="img" fontSize="large" sx={{ color: "black" }}/>
        </a>
      </div>
    </div>
  )
}
