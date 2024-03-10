import {React} from "react";
import {NavLink} from "react-router-dom";
import profile from "../assets/profile1.png";

import "../styles/NavBar.css";

export default function NavBar() {
	return (
	  <div className="navbar justify-between">
		<div className="white head-text justify-front">MindBridge</div>
		<div className="dropdown">
		  <NavLink className="justify-end" to={"/Profile"}>
			<img src={profile} className="image" alt="Profile" />
			<div className="dropdown-content">
			  <NavLink to="/profile/settings">Settings</NavLink>
			  <NavLink to="/profile/logout">Logout</NavLink>
			</div>
		  </NavLink>
		</div>
	  </div>
	);
  }
  