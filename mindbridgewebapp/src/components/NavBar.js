import {React} from "react";
import {NavLink} from "react-router-dom";
import profile from "../assets/profile.jpeg";

import "../styles/NavBar.css";

export default function NavBar() {
	return (	
		<div className = 'navbar'>
			<div className = 'white head-text'>
				MindBridge
			</div>
			<NavLink 
				className = 'justify-end'
				to={"/Profile"} >
				<img src={profile} className= 'image'/>
			</NavLink>
		</div>
	);
}