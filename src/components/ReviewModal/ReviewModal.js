import React, { useState, useEffect } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ReactStars from "react-stars";
import * as Icon from "react-feather";
import axios from "axios";
import "./ReviewModal.css";

const ReviewModal = ({
  isModalActive,
  closeModal,
  propertyId,
  isEditing,
  reviewData,
}) => {
  const [rating, setRating] = useState();
  const [reviewText, setReviewText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (reviewData) {
      if (reviewData.text) {
        setReviewText(reviewData.text);
      }
      if (reviewData.rating) {
        setRating(reviewData.rating);
      }
    }
  }, [reviewData]);

  useEffect(() => {
    if (rating && reviewText) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rating, reviewText]);

  const assignRating = (rating) => {
    setRating(rating);
  };

  const handleReviewText = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);

    if (!isEditing) {
      axios
        .post(`/api/review/${propertyId}`, {
          text: reviewText,
          userID: 31,
          rating: rating,
        })
        .then((res) => {
          setResponseMessage("Thank you for submitting your review!");
        });
    } else {
      axios
        .put(`/api/review/${reviewData.review_id}`, {
          text: reviewText,
          userID: reviewData.user_id,
          rating: rating,
          propID: reviewData.property_id,
        })
        .then((res) => {
          setResponseMessage("Your review has been updated.");
        });
    }

    setTimeout(() => {
      handleCloseModal();
    }, 3000);
  };

  const handleCloseModal = () => {
    setReviewText("");
    setRating();
    setIsDisabled(false);
    setResponseMessage("");
    closeModal();
  };

  return (
    <Dialog
      className="review-modal"
      isOpen={isModalActive}
      onDismiss={handleCloseModal}
      aria-label="menu"
    >
      <div className="review-close-x">
        <Icon.X onClick={handleCloseModal} />
      </div>
      <form onSubmit={(e) => (isDisabled ? () => {} : handleSubmit(e))}>
        <div className="review-top-form">
          How would your rate your stay?
          <ReactStars
            count={5}
            onChange={assignRating}
            size={24}
            color2={"#ff385c"}
            value={rating}
          />
        </div>
        <div className="review-bottom-form">
          <textarea
            className="review-space"
            placeholder="Leave a detailed review here"
            onChange={handleReviewText}
            value={reviewText}
          ></textarea>
        </div>
        <div className="review-very-bottom">
          <button
            className={isDisabled ? "review-btn disabled" : "review-btn"}
            disabled={isDisabled}
          >
            {isEditing ? "Update" : "Submit"}
          </button>
        </div>
        <div className="review-response-message">{responseMessage}</div>
      </form>
    </Dialog>
  );
};

export default ReviewModal;
