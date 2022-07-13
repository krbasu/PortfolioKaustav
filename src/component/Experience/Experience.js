import React from "react";
import "./Experience.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
      <div className='achievement'>
        <div className='circle'>1.5+</div>
        <span style={{ color: darkMode ? "white" : "" }}>Years</span>
        <span>Experience</span>
      </div>
      <div className='achievement'>
        <div className='circle'>10+</div>
        <span style={{ color: darkMode ? "white" : "" }}>Completed</span>
        <span>Projects</span>
      </div>
      <div className='achievement'>
        <div className='circle'>3</div>
        <span style={{ color: darkMode ? "white" : "" }}>Working</span>
        <span>Companies</span>
      </div>
    </div>
  );
}

export default Experience;
