import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import HappyFace from "../assets/HappyFace.png";
import Message from "../assets/message.png";
import CWheel from "../assets/cwheel.png";
import Plus from "../assets/plus.png";

import "../styles/SideBar.css";

export default function SideBar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Define image and link variables based on the page
  const imageSource = isHomePage ? HappyFace : Message;
  const linkTo = isHomePage ? '/Emotion' : '/';
  const imageClassName = isHomePage ? 'sideimage' : 'message';

  return (	
    <div className='sidebar'>
        <NavLink
            className={({ isActive }) => isActive ? '' : ''}
            to={linkTo}
        >
            <img src={imageSource} className= {`${imageClassName}`}  />
        </NavLink>
        <NavLink
            className=''
            to="colourwheel"
        >
            <img src={CWheel} className= {`${imageClassName}`}  />
        </NavLink>
        <NavLink
            className=''
            to="add"
        >
            <img src={Plus} className= {`${imageClassName}`}  />
        </NavLink>
    </div>
  );
}