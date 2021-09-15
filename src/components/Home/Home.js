import React from "react";
import BrowseCategories from "../BrowseCategories/BrowseCategories";
import Footer from "../Footer/Footer";
import Splash from "../Splash/Splash";
import TryHosting from "../TryHosting/TryHosting";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Splash />
      <BrowseCategories />
      <TryHosting />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
