import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import "../Property/Property.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Property = ({ id, image, name, guests, beds, baths, price }) => {
  //get review averages
  const [average, setAverage] = useState();
  const [count, setCount] = useState();
  const [propertyID, setPropertyID] = useState();

  useEffect(() => {
    axios.get(`/api/average/${id}`).then((res) => {
      let result = res.data[0].avg * 100;
      let rounded = Math.round(result) / 100;
      setAverage(rounded);
    });
  }, [id]);

  //get review count
  useEffect(() => {
    axios.get(`/api/count/${id}`).then((res) => {
      setCount(res.data[0].count);
    });
  }, [id]);
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/listing?id=${id}`);
  };

  // const addToTripBoard = (propertyID) => {
  //   console.log("fave button clicked");
  //   setPropertyID(id);
  //   axios
  //     .post("/api/favorites", { propID: propertyID, userID: 31 })
  //     .then((res) => {
  //       console.log("added to trips");
  //     });
  // };

  return (
    <div className="property-card">
      <div className="image-holder">
        <img alt="property-pic" src={image} onClick={clickHandler} />
      </div>
      <div className="right">
        <ion-icon
          // onClick={() => addToTripBoard(propertyID)}
          id="fave-me"
          name="heart-outline"
        ></ion-icon>
        <div className="top-row">
          <h3>{name}</h3>
          <div className="line"></div>
        </div>
        <div className="middle-row">
          <div className="feature-row">
            <span>{guests} Guests</span>
            <span className="partition"> . </span>
            <span> {beds} Beds</span>
            <span className="partition"> . </span>
            <span> {baths} Baths</span>
          </div>
        </div>
        <div className="price-row">
          <h3 className="price"> ${price} / night</h3>
        </div>
        <div className="bottom-row">
          <div className="review-part">
            <ion-icon id="star" name="star"></ion-icon>
            <h4>
              {average} ({count} Reviews)
            </h4>
          </div>
          {/* <div className="cost-part"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Property;
