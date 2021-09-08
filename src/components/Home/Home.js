import React from "react";
import BrowseCategories from "../BrowseCategories/BrowseCategories";
import Footer from "../Footer/Footer";
import Splash from "../Splash/Splash";
import TryHosting from "../TryHosting/TryHosting";

const Home = () => {
  return (
    <div>
      <Splash />
      <BrowseCategories />
      <TryHosting />
      <Footer />
    </div>
  );
};

export default Home;
