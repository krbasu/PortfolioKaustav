import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import myphoto from "../../img/myphoto.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floatingdiv from "../Floatingdiv/Floatingdiv";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Kaustav Basu</span>
          <span>
            Frontend Developer with high level of production value and
            experience in Fullstack Development with a variety of different
            components .
          </span>
        </div>
        <button className='button i-button'>Hire Me</button>
        <div className='i-icons'>
          <img src={Github} alt='' />
          <img src={Linkedin} alt='' />
          <img src={Instagram} alt='' />
        </div>
      </div>
      <div className='i-right'>
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={myphoto} alt='' />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className='floating-div'
        >
          <Floatingdiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0" }}
        >
          <Floatingdiv image={thumbup} txt1='Best Design' txt2='Builder' />
        </motion.div>
        <div
          className='blur'
          style={{
            background: "#C1F5FF",
            top: "17px",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
