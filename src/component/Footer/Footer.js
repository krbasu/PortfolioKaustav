import React from "react";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} style={{ width: "100%" }} alt='' />
      <div className='f-content'>
        <span>kaustavbasu4314@gmail.com</span>
        <div className='f-icons'>
          <Insta color='white' size='3rem' />
          <Facebook color='white' size='3rem' />
          <Github color='white' size='3rem' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
