import React from "react";
import NavSearch from "../NavSearch/NavSearch";
import { NavLink } from "react-router-dom";
import "./Header2.css";

const Header2 = () => {
  return (
    <div className="header2">
      <div className="logo-container2">
        <NavLink className="nav-link2" to="/">
          <img
            alt="logo"
            src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Wander_logo_200_2.png?alt=media&token=92df445f-0b42-4b5b-af20-d7a332f398e7"
            id="logo"
          />
        </NavLink>
      </div>
      <div className="search-container">
        <NavSearch />
      </div>
      <div className="links2">
        <NavLink className="nav-link2" to="/properties">
          <h4>View All</h4>
        </NavLink>
        <NavLink className="nav-link2" to="/favorites">
          <h4>Favorites</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Header2;
