import React, { useState, useEffect } from "react";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
// import Map from "../Map/Map";
import ReviewButton from "../ReviewButton/ReviewButton";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Listing/Listing.css";
import * as Icon from "react-feather";
import Skeleton from "react-loading-skeleton";
import ReviewModal from "../ReviewModal/ReviewModal";

import ThingsToKnow from "../ThingsToKnow/ThingsToKnow";

const categoryMapping = {
  Backyard: "leaf-outline",
  Bar: "beer-outline",
  "BBQ Grill": "fast-food-outline",
  "Beach Access": "boat-outline",
  Breakfast: "cafe-outline",
  "Dedicated Workspace": "desktop-outline",
  Firepit: "bonfire-outline",
  "Free Parking": "car-outline",
  Hammock: "bed-outline",
  "Hot Tub": "water-outline",
  "Indoor Fireplace": "flame-outline",
  Keypad: "key-outline",
  Kitchen: "restaurant-outline",
  "Lake Access": "boat-outline",
  Lockbox: "lock-closed-outline",
  "Long-Term Stays Allowed": "calendar-number-outline",
  "Luggage Drop-off": "briefcase-outline",
  "Patio or Balcony": "cloudy-night-outline",
  "Pets Allowed": "paw-outline",
  Pool: "help-buoy-outline",
  "Private Entrance": "footsteps-outline",
  "Self Check-in": "business-outline",
  "Suitable for Events": "balloon-outline",
  "Trail Access": "bicycle-outline",
  Waterfront: "water-outline",
  Wifi: "wifi-outline",
};

const Listing = () => {
  const location = useLocation();
  const [property, setProperty] = useState();
  const [reviews, setReviews] = useState();
  const [isModalActive, setIsModalActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [reviewData, setReviewData] = useState();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    axios.get(`/api/listing/${id}`).then((res) => {
      setProperty(res.data);
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    axios.get(`/api/reviews/${id}`).then((res) => {
      setReviews(res.data);
    });
  }, [location.pathname, location.search]);

  const renderAmenity = (amenity) => {
    return (
      <ion-icon
        size="medium"
        className="amen-icons"
        name={categoryMapping[amenity]}
      ></ion-icon>
    );
  };

  const openModal = () => {
    setIsModalActive(true);
  };
  const closeModal = () => {
    setIsModalActive(false);
  };

  const editReview = (reviewData) => {
    // console.log("clicked to edit");
    setIsModalActive(true);
    setIsEditing(true);
    setReviewData(reviewData);
  };

  const deleteReview = (reviewData) => {
    console.log("clicked to delete");
    setReviewData(reviewData);
    axios.delete(`/api/review/${reviewData.review_id}`).then((res) => {
      console.log("review has been deleted");
    });
  };

  // console.log("property:", property.long);
  // const locationInfo = {
  //   address: "1600 Ampitheatre Parkway, Mountain View, California.",
  //   lat: 37.42216,
  //   lng: -122.08427,
  // };

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
              <img
                className="feature-img"
                alt="feature-img"
                src={property.cover_pic}
              />
            </div>
            <div className="middle">
              <img alt="feature-img" src={property.urls[1]} />
              <img alt="feature-img" src={property.urls[2]} />
            </div>
            <div className="right-side">
              <img alt="feature-img" src={property.urls[3]} id="top-right" />
              <img alt="feature-img" src={property.urls[4]} id="bottom-right" />
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
                {/* <div className="about-modal-button">
                  <button className="show-more-btn">Show More</button>
                </div> */}
              </div>
              <div className="amenities"></div>
              <div className="offerings">
                <h2> What this place offers</h2>
              </div>
              <div className="list-container">
                <div className="left-list">
                  <div className="amen">
                    {renderAmenity(property.amen_1)}
                    <p>{property.amen_1}</p>
                  </div>
                  <div className="amen">
                    {renderAmenity(property.amen_2)}
                    <p>{property.amen_2}</p>
                  </div>
                  <div className="amen">
                    {renderAmenity(property.amen_3)}
                    <p>{property.amen_3}</p>
                  </div>
                  <div className="amen">
                    {renderAmenity(property.amen_4)}

                    <p>{property.amen_4}</p>
                  </div>
                </div>
                <div className="right-list">
                  <div className="amen">
                    {renderAmenity(property.amen_5)}
                    <p>{property.amen_5}</p>
                  </div>
                  <div className="amen">
                    {renderAmenity(property.amen_6)}
                    <p>{property.amen_6}</p>
                  </div>
                  <div className="amen">
                    {renderAmenity(property.amen_7)}
                    <p>{property.amen_7}</p>
                  </div>
                  <div className="amen">
                    {renderAmenity(property.amen_8)}
                    <p>{property.amen_8}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-box">
              <div className="box">
                <div className="pricing-info">
                  <h3> $ {property.price_per_night}</h3>
                  <p> / night</p>
                </div>
                <form className="booking-form">
                  <input type="date" />
                  <input type="date" />
                  <button className="booking-btn">Reserve</button>
                </form>
              </div>
            </div>
          </div>
          {/* <p>calendar</p> */}
          <div className="reviews">
            <div className="review-title">
              <h2>Reviews</h2>
            </div>
            <div className="review-holder">
              {reviews && reviews.length ? (
                reviews.map((review, index) => {
                  return (
                    <Review
                      key={index}
                      reviewID={review.review_id}
                      reviewText={review.text}
                      text={review.text}
                      first={review.f_name}
                      last={review.l_name}
                      image={review.img_url}
                      reviewData={review}
                      editReview={editReview}
                      deleteReview={deleteReview}
                    />
                  );
                })
              ) : (
                <div>
                  <p className=""> Be the first to review this property</p>
                </div>
              )}
            </div>
            <div className="button-wrapper">
              <ReviewButton openModal={openModal} />
            </div>
          </div>
          {/* <Map /> */}
          <ThingsToKnow />
        </div>
      ) : (
        <div>
          <Skeleton />
        </div>
      )}
      <Footer />

      <ReviewModal
        propertyId={
          property && property.property_id ? property.property_id : null
        }
        closeModal={closeModal}
        isModalActive={isModalActive}
        isEditing={isEditing}
        reviewData={reviewData}
      />
    </div>
  );
};

export default Listing;
