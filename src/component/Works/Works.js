import React from "react";
import "./Works.css";
import upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import amazon from "../../img/amazon.png";
import shopify from "../../img/Shopify.png";
import facebook from "../../img/Facebook.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>Works For</span>
        <span>Services</span>
        <span>
          I provide My clients Frontend services <br /> with full satisfaction{" "}
          <br />
          and Worked For Intellect Design Arena Limited <br /> as well as Verzeo
          Edutech as Full stack Developer
        </span>
        <button className='button s-button'>Hire Me</button>
        <div className='blur s-blur1'></div>
      </div>
      <div className='w-right'>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className='w-mainCircle'
        >
          <div className='w-secCircle'>
            <img src={upwork} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={fiverr} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={amazon} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={shopify} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={facebook} alt='' />
          </div>
        </motion.div>
        <div className='w-backcircle bluecircle'></div>
        <div className='w-backcircle yellowcircle'></div>
      </div>
    </div>
  );
};

export default Works;
