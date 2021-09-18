import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import "../Property/Property.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../ducks/favoritesReducer";

const Property = ({
  id,
  image,
  name,
  guests,
  beds,
  baths,
  price,
  property,
}) => {
  const [average, setAverage] = useState();
  const [count, setCount] = useState();
  const [propertyID, setPropertyID] = useState();
  const favorites = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isFave, setIsFave] = useState(false);

  //get review averages
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

  const favoriteHandler = (property) => {
    console.log("fave button clicked");
    if (!isFave) {
      dispatch(addFavorite(property));
      setIsFave(true);
    } else {
      console.log("fave btn clicked again");
      dispatch(removeFavorite(property.property_id));
      setIsFave(false);
    }
  };
  console.log("guest:", guests);
  return (
    <div className="property-card">
      <div className="image-holder">
        <img alt="property-pic" src={image} onClick={clickHandler} />
      </div>
      <div className="right">
        <ion-icon
          onClick={() => favoriteHandler(property)}
          id="fave-me"
          name={isFave ? "heart" : "heart-outline"}
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
