import React from "react";
import * as Icon from "react-feather";
import "../Property/Property.css";
import { useHistory } from "react-router-dom";

const Property = ({
  id,
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
  const history = useHistory();

  const clickHandler = () => {
    console.log("clicked");
    history.push(`/listing?id=${id}`);
  };
  return (
    <div className="property-card" onClick={clickHandler}>
      <div className="image-holder">
        <img alt="property-pic" src={image} />
      </div>
      <div className="right">
        <div className="top-row">
          <h3>{name}</h3>
          <div className="line"></div>
        </div>
        <div className="middle-row">
          <ul>
            <li>{guests} Guests</li>
            <li> {beds} Beds</li>
            <li> {baths} Baths</li>
          </ul>
        </div>
        <div className="bottom-row">
          <h4>Rating (# Reviews)</h4>
        </div>
      </div>
      <div className="fave">
        <h3 className="price"> ${price} /night</h3>
      </div>
    </div>
  );
};

export default Property;
