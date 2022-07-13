import React from "react";
import "./Card.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card'>
      <img src={emoji} alt='' />
      <span style={{ color: darkMode ? "#dfe6e9" : "" }}>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>LEARN MORE</button>
    </div>
  );
};

export default Card;
