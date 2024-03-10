import React from "react";
import {NavLink} from "react-router-dom";
import HappyFace from "../assets/HappyFace.png";

import "../styles/SideBar.css";

export default function SideBar() {
	return (	
		<div className = 'sidebar'>
			<NavLink 
				className = ''
				to={"/Emotion"} >
				<img src={HappyFace} className= 'emotions'/>
			</NavLink>
		</div>

//make the emotions reactive to go back to the commands 


	);
}