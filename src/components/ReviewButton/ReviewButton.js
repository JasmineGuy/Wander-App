import React from "react";
import "../ReviewButton/ReviewButton.css";
const ReviewButton = ({ openModal }) => {
  return (
    <div className="button-wrapper">
      <button onClick={openModal}>Review this property</button>
    </div>
  );
};

export default ReviewButton;
