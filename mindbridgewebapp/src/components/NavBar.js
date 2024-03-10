import {React} from "react";
import {NavLink} from "react-router-dom";
import profile from "../assets/profile.png";

import "../styles/NavBar.css";

export default function NavBar() {
	return (	
		<div className = 'navbar justify-between'>
			<div className = 'white head-text justify-front'>
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