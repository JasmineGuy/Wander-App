import React from "react";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="home-header">
      <div className="home-logo-container">
        <NavLink className="nav-link" to="/">
          <img
            alt="logo"
            src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Wander_logo_200.png?alt=media&token=bfb31f5f-b7a8-4843-940e-123ba31f9307"
          />
        </NavLink>
      </div>

      <div className="home-links">
        <NavLink className="home-nav-link" to="/properties">
          <h4>View All</h4>
        </NavLink>
        <NavLink className="home-nav-link" to="/favorites">
          <h4>Favorites</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
