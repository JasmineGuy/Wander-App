import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Property/Property.css";

const Property = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    axios.get("/api/properties").then((res) => {
      // console.log("res:", res.data);
      setUrls(res.data[0].urls);
    });
  }, []);
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
          <p>Amenity 7</p>
          <p>Amenity 8</p>

          <h4>Rating (# Reviews)</h4>
        </div>
      </div>
      <h2 className="right"> $50 /night</h2>
    </div>
  );
};

export default Property;
