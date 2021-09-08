import React from "react";
import "../Property/Property.css";

const Property = () => {
  return (
    <div className="property-card">
      <button className="property-btn"></button>
      <div className="middle">
        <h3>Property Name</h3>
        <div className="line"></div>
        <p>Max Guests</p>
        <p>Bedrooms</p>
        <p>Baths</p>
      </div>
      <h2 className="right"> $50 /night</h2>
    </div>
  );
};

export default Property;
