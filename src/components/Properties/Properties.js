import React from "react";
import Header from "../Header/Header";
import Property from "../Property/Property";
import Map from "../Map/Map";
import "../Properties/Properties.css";

const Properties = () => {
  return (
    <div>
      <Header />
      <div className="properties-display">
        <Property />
        <Map />
      </div>
    </div>
  );
};

export default Properties;
