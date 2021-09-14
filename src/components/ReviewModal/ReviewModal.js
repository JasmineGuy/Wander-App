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
  const [reviewText, setReviewText] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (reviewData && reviewData.text) setReviewText(reviewData.text);
  }, [reviewData]);
  console.log("reviewData", reviewData);

  const assignRating = (rating) => {
    console.log("star rating:", rating);
    setRating(rating);
  };

  const handleReviewText = (e) => {
    setReviewText(e.target.value);
  };

  console.log("IS DISABLED: ", isDisabled);

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
  };

  const handleCloseModal = () => {
    if (isDisabled) {
      setIsDisabled(false);
    }
    if (responseMessage) {
      setResponseMessage("");
    }
    closeModal();
  };

  // console.log("reviewText:", reviewText);

  console.log("isDisabled:", isDisabled);

  return (
    <div className="review-modal">
      <Dialog
        className="modal"
        isOpen={isModalActive}
        onDismiss={handleCloseModal}
      >
        <div className="close-x">
          <Icon.X onClick={handleCloseModal} />
        </div>
        <form
          // onSubmit={(e) => handleSubmit(e)}
          onSubmit={(e) => (isDisabled ? () => {} : handleSubmit(e))}
        >
          <div className="top-form">
            How would your rate your stay?
            <ReactStars
              count={5}
              onChange={assignRating}
              size={24}
              color2={"#ff385c"}
              value={rating}
            />
          </div>
          <div className="bottom-form">
            <textarea
              className="review-space"
              placeholder="Leave a detailed review here"
              onChange={handleReviewText}
              value={reviewText}
            ></textarea>
          </div>
          <div className="very-bottom">
            <button
              className={isDisabled ? "review-btn disabled" : "review-btn"}
              disabled={isDisabled}
            >
              {isEditing ? "Update" : "Submit"}
            </button>
          </div>
          <div className="response-message">{responseMessage}</div>
        </form>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
