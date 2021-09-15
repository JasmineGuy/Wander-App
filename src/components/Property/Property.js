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
          <div className="feature-row">
            <p>{guests} Guests</p>
            <p> {beds} Beds</p>
            <p> {baths} Baths</p>
          </div>
          <div className="amenity-row">
            <p>{amen1}</p>
            <p>{amen2}</p>
            <p>{amen3}</p>
          </div>
        </div>
        <div className="bottom-row">
          <div className="review-part">
            <h4>Rating (# Reviews)</h4>
          </div>
          <div className="cost-part">
            <h3 className="price"> ${price}</h3>
            <p>/ night</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
