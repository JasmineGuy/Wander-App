import React from "react";
import "../ThingsToKnow/ThingsToKnow.css";

const ThingsToKnow = () => {
  return (
    <div className="things-container">
      <div className="top-row">
        <h2>Things to know</h2>
      </div>
      <div className="btm-row">
        <div className="column">
          <h3>House Rules</h3>
          <div className="ttk-row">
            <ion-icon name="time-outline"></ion-icon>
            <p> Check-in: After 4:00 PM</p>
          </div>
          <div className="ttk-row">
            <ion-icon name="timer-outline"></ion-icon>
            <p> Check-out: 11:00 AM</p>
          </div>
          <div className="ttk-row">
            <ion-icon name="bag-check-outline"></ion-icon>
            <p>Self check-in </p>
          </div>
          <div className="ttk-row">
            <ion-icon name="logo-no-smoking"></ion-icon>
            <p>No smoking</p>
          </div>
        </div>
        <div className="column">
          <h3>Health & Safety</h3>
          <div className="ttk-row">
            <ion-icon name="medkit-outline"></ion-icon>
            <p>COVID-19 guidelines apply</p>
          </div>
          <div className="ttk-row">
            <ion-icon name="videocam-outline"></ion-icon>
            <p>Security camera/recording device</p>
          </div>
          <div className="ttk-row">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <p>Smoke alarm</p>
          </div>
        </div>
        <div className="column">
          <h3>Cancellation Policy</h3>

          <div className="ttk-row">
            <ion-icon name="hand-right-outline"></ion-icon>
            <p>Cancellation details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
