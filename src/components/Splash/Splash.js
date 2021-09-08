import React from "react";
import Search from "../Search/Search";
import Header from "../Header/Header";
import "../Splash/Splash.css";

const Splash = () => {
  return (
    <div className="splash-container">
      <Header />
      <Search />
    </div>
  );
};

export default Splash;
