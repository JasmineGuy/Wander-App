import React, { useState, useEffect } from "react";
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
  const favorites = useSelector((state) => state);
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isFave, setIsFave] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { reduxRoute } = reduxState.reduxRouteReducer;
  const favoritesArr = favorites.favoritesReducer.favorites;

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 550);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
  }, [window]);

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
    if (!isFave) {
      dispatch(addFavorite(property));
      setIsFave(true);
    } else {
      dispatch(removeFavorite(property.property_id));
      setIsFave(false);
    }
  };

  useEffect(() => {
    const isInFaves = favoritesArr.find((fav) => fav.property_id === id);
    if (isInFaves) {
      setIsFave(true);
    } else {
      setIsFave(false);
    }
  }, [favoritesArr, id]);

  const deleteFave = () => {
    dispatch(removeFavorite(id));
    setIsFave(false);
  };

  return (
    <div className="property-card">
      {/* <div className="above-it-all"> */}

      {/* </div> */}
      <div className="image-container">
        <div className={isMobile ? "overhead-title-mobile" : "overhead-title"}>
          {name}
        </div>
        <div className="image-holder">
          <img
            className="cowabunga"
            alt="property-pic"
            src={image}
            onClick={clickHandler}
          />
        </div>
      </div>
      <div className="right">
        <div className="toggle-icons">
          {reduxRoute === "/properties" ? (
            <ion-icon
              onClick={() => favoriteHandler(property)}
              id="fave-me"
              name={isFave ? "heart" : "heart-outline"}
            ></ion-icon>
          ) : (
            <ion-icon name="close-outline" onClick={deleteFave}></ion-icon>
          )}
        </div>
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

        <div className="bottom-row">
          <div className="review-part">
            <ion-icon id="star" name="star"></ion-icon>
            <h4>
              {average} ({count} Reviews)
            </h4>
          </div>
          <div className="price-row">
            <h3 className="price"> ${price} / night</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
