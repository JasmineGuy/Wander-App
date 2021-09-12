import React, { useState, useEffect } from "react";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Listing/Listing.css";
import * as Icon from "react-feather";
import Skeleton from "react-loading-skeleton";

import ThingsToKnow from "../ThingsToKnow/ThingsToKnow";

const Listing = () => {
  const location = useLocation();
  const [property, setProperty] = useState();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log("id from params:", id);

    axios.get(`/api/listing/${id}`).then((res) => {
      console.log("res.data:", res.data);
      setProperty(res.data);
    });
  }, [location.pathname, location.search]);

  // console.log("location:", location);
  // console.log("location.search:", location.search);
  // console.log("property:", property);
  // console.log(property[0].name);

  return (
    <div>
      <Header2 />
      {property ? (
        <div className="listing-container">
          <div className="top">
            <div className="title">
              <h1>{property.name}</h1>
            </div>
            <div className="ratings-wrapper">
              <h5>
                {" "}
                <Icon.Star color="red" size={16} />
                Rating (# reviews)
              </h5>
              <h5>
                {property.city}, {property.state}, {property.country}
              </h5>
            </div>
          </div>
          <div className="images-container">
            <div className="left-side">
              <img className="feature-img" alt="feature-img" src="" />
            </div>
            <div className="middle">
              <img
                alt="feature-img"
                src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Shipping%20Containers%2F1%2F2.jpeg?alt=media&token=931933bb-919e-4c57-b441-e5437ccf2513"
              />
              <img
                alt="feature-img"
                src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Shipping%20Containers%2F1%2F3.jpeg?alt=media&token=80f23afc-68a3-4a80-8e2b-c53f1c5a0073"
              />
            </div>
            <div className="right-side">
              <img
                alt="feature-img"
                src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Shipping%20Containers%2F1%2F4.jpeg?alt=media&token=35c727e7-257d-42d0-9c9c-0172eedab219"
              />
              <img
                alt="feature-img"
                src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Shipping%20Containers%2F1%2F5.jpeg?alt=media&token=d4ccf2dc-bbc2-427e-8cf3-fbd4ccdb331f"
              />
            </div>
          </div>
          <div className="split">
            <div className="split-left">
              <div className="host-info">
                <div className="text">
                  <div className="text-row-1">
                    <h2>
                      Entire rental unit hosted by {property.f_name}{" "}
                      {property.l_name}
                    </h2>
                  </div>
                  <div className="text-row-2">
                    <p>{property.max_guests} Guests </p>
                    <p>{property.beds} Beds </p>
                    <p>{property.baths} Baths </p>
                  </div>
                </div>
                <div className="pic">
                  <div className="pic-circle">
                    {/* <Icon.Award /> */}
                    <img alt="host" src={property.img_url} />
                  </div>
                </div>
              </div>
              <div className="bullets">
                <div className="first">
                  <Icon.Home />
                  <p>Entire Home</p>
                </div>
                <div className="second">
                  <Icon.Key />
                  <p>Self Check-in</p>
                </div>
                <div className="third">
                  <Icon.Award />
                  <p>{property.f_name} is a Superhost</p>
                </div>
              </div>
              <div className="description">
                <p>{property.description}</p>
              </div>
              <div className="amenities"></div>
              <div className="offerings">
                <h2> What this place offers</h2>
              </div>
              <div className="list-container">
                <div className="left-list">
                  <div className="amen">
                    <Icon.Home />
                    <p>{property.amen_1}</p>
                  </div>
                  <div className="amen">
                    <Icon.Key />
                    <p>{property.amen_2}</p>
                  </div>
                  <div className="amen">
                    <Icon.Award />
                    <p>{property.amen_3}</p>
                  </div>
                  <div className="amen">
                    <Icon.Home />
                    <p>{property.amen_4}</p>
                  </div>
                </div>
                <div className="right-list">
                  <div className="amen">
                    <Icon.Home />
                    <p>{property.amen_5}</p>
                  </div>
                  <div className="amen">
                    <Icon.Key />
                    <p>{property.amen_6}</p>
                  </div>
                  <div className="amen">
                    <Icon.Award />
                    <p>{property.amen_7}</p>
                  </div>
                  <div className="amen">
                    <Icon.Home />
                    <p>{property.amen_8}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-box">
              <div className="box">
                <h3>{property.price_per_night}/ night</h3>
                <form>
                  <input type="date" />
                  <input type="date" />
                  <button>Check Availability</button>
                </form>
              </div>
            </div>
          </div>
          <p>calendar</p>
          <div className="reviews">
            <div className="review-title">
              <h2>Reviews</h2>
            </div>
            <div className="review-holder">
              {/* {reviews.length
              ? "here are the reviews"
              : "Be the first to review this property."} */}
            </div>
          </div>
          <p>prop map</p>
          <ThingsToKnow />
        </div>
      ) : (
        <div>
          <Skeleton />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Listing;
