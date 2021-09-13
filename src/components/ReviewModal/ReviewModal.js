import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ReactStars from "react-stars";
import axios from "axios";
import "./ReviewModal.css";

const ReviewModal = ({ isModalActive, closeModal }) => {
  const [rating, setRating] = useState();

  const assignRating = (rating) => {
    console.log("star rating:", rating);
    setRating(rating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/review/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="review-modal">
      <Dialog className="modal" isOpen={isModalActive} onDismiss={closeModal}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="top-form">
            How would your rate your stay?
            <ReactStars
              count={5}
              onChange={(e) => {
                assignRating(e.target.value);
              }}
              size={24}
              color2={"#ff385c"}
            />
          </div>
          <div className="bottom-form">
            <textarea
              className="review-space"
              placeholder="Leave a detailed review here"
            ></textarea>
          </div>
          <div className="very-bottom">
            <button>Submit</button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
