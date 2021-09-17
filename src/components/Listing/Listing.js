import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import Skeleton from "react-loading-skeleton";
import Header2 from "../Header2/Header2";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
import ReviewButton from "../ReviewButton/ReviewButton";
import ReserveButton from "..//ReserveButton/ReserveButton";
import ReviewModal from "../ReviewModal/ReviewModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import ThingsToKnow from "../ThingsToKnow/ThingsToKnow";
import Map from "../Map/Map";
import "../Listing/Listing.css";

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
  Star: "star-outline",
  "Trail Access": "bicycle-outline",
  Waterfront: "water-outline",
  Wifi: "wifi-outline",
};

const Listing = () => {
  const location = useLocation();
  const [property, setProperty] = useState();
  const [reviews, setReviews] = useState();
  const [isModalActive, setIsModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const [isConfirmModalActive, setIsConfirmModalActive] = useState(false);
  const [deleteID, setDeleteID] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [reviewData, setReviewData] = useState();
  const [average, setAverage] = useState();
  const [count, setCount] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [days, setDays] = useState();
  const [price, setPrice] = useState();
  const [baseTotal, setBaseTotal] = useState();
  const [cleaning, setCleaning] = useState();
  const [service, setService] = useState();
  const [taxes, setTaxes] = useState();
  const [grandTotal, setGrandTotal] = useState();

  //get all property data
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    axios.get(`/api/listing/${id}`).then((res) => {
      setProperty(res.data);
    });
  }, [location.pathname, location.search]);

  //calls to get reviews from backend OR refresh reviews after new crud
  const getReviews = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    axios.get(`/api/reviews/${id}`).then((res) => {
      setReviews(res.data);
    });
  }, [location.search]);

  useEffect(() => {
    getReviews();
  }, [location.pathname, location.search, getReviews]);

  //get review averages
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    axios.get(`/api/average/${id}`).then((res) => {
      let result = res.data[0].avg * 100;
      let rounded = Math.round(result) / 100;
      setAverage(rounded);
    });
  }, [location.pathname, location.search]);

  //get review count
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    axios.get(`/api/count/${id}`).then((res) => {
      setCount(res.data[0].count);
    });
  }, [location.pathname, location.search]);

  //function to render all amenity icons - used with lines 19-47 categoryMapping
  const renderAmenity = (amenity) => {
    return (
      <ion-icon
        size="medium"
        className="amen-icons"
        name={categoryMapping[amenity]}
      ></ion-icon>
    );
  };

  //Google Maps integration initialization
  let map;
  const google = window.google;
  const initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  };

  // const addToTripBoard = (propertyID) => {
  //   console.log("fave button clicked");
  //   axios
  //     .post("/api/favorites", { propID: propertyID, userID: 31 })
  //     .then((res) => {
  //       console.log("added to trips");
  //     });
  // };

  // Modal functions
  const openModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
    getReviews();
  };

  const openDeleteModal = (reviewID) => {
    setIsDeleteModalActive(true);
    setDeleteID(reviewID);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalActive(false);
    getReviews();
  };

  const openConfirmModal = () => {
    setIsConfirmModalActive(true);
    console.log("clicked reserve");
    console.log("made it here");
    console.log("active?:", isConfirmModalActive);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalActive(false);
  };

  const editReview = (reviewData) => {
    setIsModalActive(true);
    setIsEditing(true);
    setReviewData(reviewData);
  };

  const deleteReview = (deleteID) => {
    axios.delete(`/api/review/${deleteID}`).then((res) => {});
    setTimeout(() => {
      closeDeleteModal();
    }, 3000);
  };

  //booking functions
  useEffect(() => {
    if (property) {
      // console.log("changes to dates detected");
      setPrice(property.price_per_night);
      calculator(startDate, endDate, price);
    }
  }, [startDate, endDate]);

  const calculator = (startDate, endDate, price) => {
    let days = Math.ceil((endDate - startDate) / 3600000 / 24);
    setDays(days);
    let total = days * price;
    setBaseTotal(total);
    let cleaning = days * 35;
    setCleaning(cleaning);
    let service = days * 15;
    setService(service);
    let taxes = days * 28;
    setTaxes(taxes);
    let grandTotal = total + cleaning + service + taxes;
    setGrandTotal(grandTotal);
  };

  const renderRow = (display) => {
    if (display) {
      return `$${display}`;
    } else {
      return "-";
    }
  };

  console.log("what about now?:", isConfirmModalActive);
  return (
    <div>
      <Header2 />
      {property ? (
        <div className="listing-container">
          <div className="title">
            <h1>{property.name}</h1>
          </div>
          <div className="gray">
            <div className="ratings-wrapper">
              <ion-icon name="star" id="star"></ion-icon>
              <p>
                {average} ({count} reviews)
              </p>
            </div>
            <div className="address-and-like-btn">
              <p id="generic-address">
                {property.city}, {property.state}, {property.country}
              </p>
              <ion-icon
                id="fave-heart"
                name="heart-outline"
                // onClick={() => addToTripBoard(property.id)}
              ></ion-icon>
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
                    <span>{property.max_guests} Guests </span>
                    <span className="partition"> . </span>
                    <span>{property.beds} Beds </span>
                    <span className="partition"> . </span>
                    <span>{property.baths} Baths </span>
                  </div>
                </div>

                <div className="pic-circle">
                  <img alt="host" src={property.img_url} />
                </div>
              </div>
              <div className="bullets">
                <div className="first">
                  <ion-icon name="home-outline"></ion-icon>
                  <p>Entire Home</p>
                </div>
                <p className="mini-desc">
                  You’ll have the apartment to yourself.
                </p>
                <div className="second">
                  <ion-icon name="bag-check-outline"></ion-icon>
                  <p>Self Check-in</p>
                </div>
                <p className="mini-desc">Check yourself in with smartlock.</p>
                <div className="third">
                  <ion-icon name="medal-outline"></ion-icon>
                  <p>{property.f_name} is a Superhost</p>
                </div>
                <p className="mini-desc">
                  Superhosts are highly rated hosts committed to providing great
                  stays for guests.
                </p>
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
            <div className="split-right">
              <div className="booking-box">
                <div className="box">
                  <div className="box-header">
                    <div className="pricing-info">
                      <h3> $ {property.price_per_night}</h3>
                      <p> / night</p>
                    </div>
                    <div className="x">
                      <ion-icon name="star" id="star"></ion-icon>
                      <p>
                        {average} ({count} reviews)
                      </p>
                    </div>
                  </div>
                  <div className="booking-form">
                    <div className="dates">
                      <DatePicker
                        className="date-picker"
                        id="start-date"
                        placeholder="CHECK-IN"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <DatePicker
                        className="date-picker"
                        id="end-date"
                        placeholder="CHECKOUT"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                      />
                    </div>
                    <div className="disclaimer">
                      <h4>You won't be charged yet</h4>
                    </div>

                    <div className="calculator">
                      <p>
                        ${property.price_per_night} x {days} nights
                      </p>
                      {renderRow(baseTotal)}
                    </div>
                    <div className="cleaning-fee">
                      <p>Cleaning fee x {days} nights</p>
                      {renderRow(cleaning)}
                    </div>
                    <div className="service-fee">
                      <p>Service Fee x {days} nights</p>
                      {renderRow(service)}
                    </div>
                    <div className="fees">
                      <p>Taxes and fees x {days} nights</p>
                      {renderRow(taxes)}
                    </div>
                    <div className="box-line"></div>
                    <div className="total">
                      <h3>Total</h3>
                      {renderRow(grandTotal)}
                    </div>
                    <div className="reserve-btn-wrapper">
                      <button onClick={openConfirmModal}>Reserve</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="review-title">
              <div className="bit">
                <ion-icon name="star" id="star"></ion-icon>
                <h2>
                  {average} ({count} reviews)
                </h2>
              </div>
              <div className="button-wrapper">
                <ReviewButton openModal={openModal} />
              </div>
            </div>
            <div className="review-holder">
              {reviews && reviews.length ? (
                reviews.map((review, index) => {
                  return (
                    <Review
                      key={index}
                      reviewID={review.review_id}
                      text={review.text}
                      first={review.f_name}
                      last={review.l_name}
                      image={review.img_url}
                      reviewData={review}
                      editReview={editReview}
                      openDeleteModal={openDeleteModal}
                      closeDeleteModal={closeDeleteModal}
                    />
                  );
                })
              ) : (
                <div>
                  <p className=""> Be the first to review this property</p>
                </div>
              )}
            </div>
          </div>
          <div className="map-section">
            <div className="map-title">
              <h2>Where you'll be</h2>
            </div>
            <Map lat={property.lat} lng={property.lng} />
          </div>
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
      <DeleteModal
        isDeleteModalActive={isDeleteModalActive}
        closeDeleteModal={closeDeleteModal}
        openDeleteModal={openDeleteModal}
        deleteReview={deleteReview}
        deleteID={deleteID}
      />
      <ConfirmModal
        property={property}
        isConfirmModalActive={isConfirmModalActive}
        closeConfirmModal={closeConfirmModal}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Listing;
