import React from "react";
import "./Navbar.css";
import Toogle from "../Toogle/Toogle.js";
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../../Context";
function Navbar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Kaustav</div>
        <span>
          <Toogle />
        </span>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul>
            <Link spy={true} to='Navbar' smooth={true}>
              <li style={{ color: darkMode ? "white" : "black" }}>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
              <li style={{ color: darkMode ? "white" : "black" }}>Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
              <li style={{ color: darkMode ? "white" : "black" }}>
                Experience
              </li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <li style={{ color: darkMode ? "white" : "black" }}>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonials' smooth={true}>
              <li style={{ color: darkMode ? "white" : "black" }}>
                Testimonials
              </li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
          <button className='button n-button'>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
