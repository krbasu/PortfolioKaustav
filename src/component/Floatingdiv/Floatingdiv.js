import React from "react";
import "./Floatingdiv.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Floatingdiv = ({ image, txt1, txt2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='floatingdiv'>
      <img src={image} alt='' />
      <span style={{ color: darkMode ? "#2d3436" : "", fontWeight: "bold" }}>
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default Floatingdiv;
