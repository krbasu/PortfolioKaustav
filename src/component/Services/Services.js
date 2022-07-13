import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import Humble from "../../img/humble.png";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Resume from "../../img/Resume.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/*left-side*/}
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>My awesome</span>
        <span>Services</span>
        <span>
          I provide our client Frontend services <br /> with full satisfaction
        </span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur1'></div>
      </div>
      {/*right-side*/}
      <div className='cards'>
        <motion.div
          initial={{ left: "74%" }}
          whileInView={{ left: "26rem" }}
          transition={transition}
          style={{ left: "26rem" }}
        >
          <Card
            emoji={Heartemoji}
            heading='Design'
            detail='Figma , Sketch , Photoshop , Adobe , Adobe xd'
          />
        </motion.div>
        <motion.div
          initial={{ left: "-8rem", top: "12rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          style={{ top: "12rem", left: "5rem" }}
        >
          <Card
            emoji={Glasses}
            heading='Developer'
            detail='HTML5 , CSS3 , Sass , Javascript , ReactJs'
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "44rem" }}
          whileInView={{ left: "32rem" }}
          transition={transition}
          style={{ top: "19rem", left: "32rem" }}
        >
          <Card
            emoji={Humble}
            heading='Automation'
            detail='Selenium , Automation Testing'
          />
        </motion.div>
      </div>
      <div
        className='blur s-blur2'
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
};

export default Services;
