import React from "react";
import * as Icon from "react-feather";
import "../Property/Property.css";

const Property = ({
  image,
  name,
  guests,
  beds,
  baths,
  amen1,
  amen2,
  amen3,
  price,
}) => {
  return (
    <div className="property-card">
      <div className="image-holder">
        <img alt="property-pic" src={image} />
      </div>
      <div className="middle">
        <h3>{name}</h3>
        <div className="line"></div>
        <p>Max Guests: {guests}</p>
        <p>Bedrooms: {beds}</p>
        <p>Baths: {baths}</p>

        <h4>Rating (# Reviews)</h4>
      </div>
      <div className="right">
        <Icon.Heart />
        <h2 className="price"> ${price} /night</h2>
      </div>
    </div>
  );
};

export default Property;
