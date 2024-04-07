// NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/profile1.png";
import { useAuth0 } from "@auth0/auth0-react";

import "../styles/NavBar.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default function NavBar({ color }) {
  return (
    <div className="navbar justify-between" style={{ backgroundColor: color }}>
      <div className="head-text">MindBridge</div>
      <div className="dropdown">
        <div className="min-h-full">
          <NavLink className="justify-end min-h-full m-0" to={"/profile"}>
            <img src={profile} className="image" alt="Profile" />
          </NavLink>
          <div className="dropdown-content -mt-1">
            <NavLink to="/profile/settings">Settings</NavLink>
            <NavLink><LogoutButton /></NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}
