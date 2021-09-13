import React from "react";
import "../Review/Review.css";

const Review = ({
  text,
  first,
  image,
  editReview,
  deleteReview,
  reviewID,
  reviewData,
}) => {
  return (
    <div className="review-card">
      <div className="actual-review">
        <div className="info-holder">
          <div className="info-left">
            <img alt="reviewer" src={image} />
            <h4>{first}</h4>
          </div>
          <div className="crud-btns">
            <ion-icon
              onClick={() => editReview(reviewData)}
              size="small"
              name="create-outline"
            ></ion-icon>
            <ion-icon
              reviewID={reviewID}
              onClick={() => deleteReview(reviewData)}
              size="small"
              name="trash-outline"
            ></ion-icon>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
