import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Listing/Listing.css";

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

  return (
    <div>
      {/* <Header /> */}
      <div className="top">
        <div className="title">
          <h1>Property Name</h1>
        </div>
        <div className="ratings-wrapper">
          <h5>Rating (# reviews)</h5>
          <h5>City, State, Country</h5>
        </div>
      </div>
      <div className="images-container">
        <div className="left-side">
          <img
            className="feature-img"
            alt="feature-img"
            src="https://firebasestorage.googleapis.com/v0/b/wander-2d5ff.appspot.com/o/Shipping%20Containers%2F1%2F1.jpeg?alt=media&token=3a46848b-f295-4722-b017-4f6e80ce6fda"
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
      <Footer />
    </div>
  );
};

export default Listing;
