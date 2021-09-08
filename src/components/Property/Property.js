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
        <div className="line"></div>
        <div className="amenities">
          <p>Amenity 1</p>
          <p>Amenity 2</p>
          <p>Amenity 3</p>
          <p>Amenity 4</p>
          <p>Amenity 5</p>
          <p>Amenity 6</p>
          <h5>Rating (# Reviews)</h5>
        </div>
      </div>
      <h2 className="right"> $50 /night</h2>
    </div>
  );
};

export default Property;
