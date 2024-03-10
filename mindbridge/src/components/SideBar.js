import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HappyFace from "../assets/HappyFace.png";
import Message from "../assets/message.png";
import CWheel from "../assets/cwheel.png";
import Plus from "../assets/plus.png";

import "../styles/SideBar.css";

export default function SideBar({ setColor, color }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [showColorWheelDropdown, setShowColorWheelDropdown] = useState(false);
  const [sidebarColor, setSidebarColor] = useState('#32477b'); // Default sidebar color

  const handleColorChange = (color) => {
    setSidebarColor(color);
    setColor(color);
    setShowColorWheelDropdown(false); // Close the dropdown after color selection
  };

  const imageSource = isHomePage ? HappyFace : Message;
  const linkTo = isHomePage ? '/Emotion' : '/';
  const imageClassName = isHomePage ? 'sideimage' : 'message';

  const isFirstImage = isHomePage; // Assuming the first image is for the home page

  return (  
    <div className='sidebar' style={{ backgroundColor: sidebarColor }}>
        <NavLink
            className={isFirstImage ? 'firstImageContainer' : ''}
            to={linkTo}
            style={{ marginTop : '100px'}}
        >
        <img src={imageSource} className={`${imageClassName}`} alt="icon" />
        </NavLink>
        <div className='colorWheel' onMouseEnter={() => setShowColorWheelDropdown(true)} onMouseLeave={() => setShowColorWheelDropdown(false)}>
            <img src={CWheel} className={`${imageClassName}`} alt="color wheel" />
            {showColorWheelDropdown && <ColorWheelDropdown onColorChange={handleColorChange} />}
        </div>
        
    </div>
  );
}

function ColorWheelDropdown({ onColorChange }) {
  const colors = ['#32477b', '#43eb9c', '#ff5733', '#ffd700']; // Example colors

  return (
    <div className="colorWheelDropdown">
      {colors.map((color, index) => (
        <div
          key={index}
          className="colorOption"
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        ></div>
      ))}
    </div>
  );
}
