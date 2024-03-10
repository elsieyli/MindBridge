import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import HappyFace from "../assets/happy.png";
import Message from "../assets/message.png";

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
    </div>
  );
}