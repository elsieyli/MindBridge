import React from "react";
import {NavLink} from "react-router-dom";
import profile from "../assets/profile.png";

import "../styles/SideBar.css";

export default function SideBar() {
	return (	
		<div className = 'sidebar'>
			<NavLink 
				className = 'justify-end'
				to={"/Profile"} >
				<img src={profile} className= 'sideimage'/>
			</NavLink>
		</div>
	);
}