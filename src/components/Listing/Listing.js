import React, { useState, useEffect } from "react";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Listing/Listing.css";
import * as Icon from "react-feather";
import ThingsToKnow from "../ThingsToKnow/ThingsToKnow";

const Listing = () => {
  const location = useLocation();
  const [property, setProperty] = useState();
  // console.log("made it to listing!");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log("id:", id);

    axios.get(`/api/listing/${id}`).then((res) => {
      setProperty(res.data);
    });
  }, [location.pathname, location.search]);

  // console.log("location:", location);
  // console.log("location.search:", location.search);
  console.log("property:", property);
  // console.log(property.name);

  return (
    <div>
      <Header2 />
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
            <img
              className="feature-img"
              alt="feature-img"
              src={property.urls[0]}
            />
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
                  <h2>Entire rental unit hosted by (Host Name)</h2>
                </div>
                <div className="text-row-2">
                  <p>3 Guests 1 Bed 2 Beds 1 Bath</p>
                </div>
              </div>
              <div className="pic">
                <div className="pic-circle">
                  {/* <Icon.Award /> */}
                  <img
                    alt="host"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=50&q=85"
                  />
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
                <p>(Host Name) is a Superhost</p>
              </div>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="amenities"></div>
            <div className="offerings">
              <h2> What this place offers</h2>
            </div>
            <div className="list-container">
              <div className="left-list">
                <div className="amen">
                  <Icon.Home />
                  <p>Entire Home</p>
                </div>
                <div className="amen">
                  <Icon.Key />
                  <p>Self Check-in</p>
                </div>
                <div className="amen">
                  <Icon.Award />
                  <p>(Host Name) is a Superhost</p>
                </div>
                <div className="amen">
                  <Icon.Home />
                  <p>Entire Home</p>
                </div>
              </div>
              <div className="right-list">
                <div className="amen">
                  <Icon.Home />
                  <p>Entire Home</p>
                </div>
                <div className="amen">
                  <Icon.Key />
                  <p>Self Check-in</p>
                </div>
                <div className="amen">
                  <Icon.Award />
                  <p>(Host Name) is a Superhost</p>
                </div>
                <div className="amen">
                  <Icon.Home />
                  <p>Entire Home</p>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-box">
            <div className="box">
              <h3>Price / night</h3>
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
      <Footer />
    </div>
  );
};

export default Listing;
