import React from "react";
import "../Review/Review.css";

const Review = ({ text, first, last, image }) => {
  return (
    <div className="review-card">
      <div className="actual-review">
        <div className="info-holder">
          <img alt="reviewer" src={image} />
          <h4>{first}</h4>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
