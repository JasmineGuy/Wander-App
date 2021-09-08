import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="logo"
          src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Wander_logo_200.png?alt=media&token=bfb31f5f-b7a8-4843-940e-123ba31f9307"
        />
      </div>
      <div className="nav-links">
        <h4>Link 1</h4>
        <h4>Link 2</h4>
      </div>
    </div>
  );
};

export default Header;
