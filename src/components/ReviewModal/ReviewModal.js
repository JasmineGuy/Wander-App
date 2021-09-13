import React, { useState, useEffect } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ReactStars from "react-stars";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      axios
        .post(`/api/review/${propertyId}`, {
          text: reviewText,
          userID: 31,
          rating: rating,
        })
        .then((res) => {
          console.log(res.data);
        });
    } else {
      axios.put(`/api/review/${reviewData.review_id}`, {
        text: reviewText,
        userID: reviewData.user_id,
        rating: rating,
        propID: reviewData.property_id,
      });
    }
  };

  // console.log("reviewText:", reviewText);

  return (
    <div className="review-modal">
      <Dialog className="modal" isOpen={isModalActive} onDismiss={closeModal}>
        {/* <form onSubmit={(e) => handleSubmit(e)}> */}
        <form onSubmit={(e) => handleSubmit(e)}>
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
              // defaultValue={reviewText}
              value={reviewText}
            ></textarea>
          </div>
          <div className="very-bottom">
            <button>{isEditing ? "Update" : "Submit"}</button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
