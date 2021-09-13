import React from "react";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import "../Header2/Header2.css";

const Header2 = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <NavLink className="nav-link" to="/">
          <img
            alt="logo"
            src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Wander_logo_200_2.png?alt=media&token=92df445f-0b42-4b5b-af20-d7a332f398e7"
          />
        </NavLink>
      </div>
      <Search />
      <div className="links">
        <NavLink className="nav-link" to="/properties">
          <h4>View All</h4>
        </NavLink>
        <h4>Trip Boards</h4>
        <h4>
          <div className="circle">
            <Icon.User />
          </div>
        </h4>
      </div>
    </div>
  );
};

export default Header2;
