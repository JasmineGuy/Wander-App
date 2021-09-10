import React from "react";
import "../ThingsToKnow/ThingsToKnow.css";
import * as Icon from "react-feather";

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
            <Icon.Clock />
            <p> Check-in: After 4:00 PM</p>
          </div>
          <div className="ttk-row">
            <Icon.Clock />
            <p> Check-out: 11:00 AM</p>
          </div>
          <div className="ttk-row">
            <Icon.Unlock />
            <p>Self check-in with smart lock</p>
          </div>
          <div className="ttk-row">
            <Icon.Slash />
            <p>No smoking</p>
          </div>
        </div>
        <div className="column">
          <h3>Health & Safety</h3>
          <div className="ttk-row">
            <Icon.Thermometer />
            <p>Social-distancing and COVID-19 guidelines apply</p>
          </div>
          <div className="ttk-row">
            <Icon.Video />
            <p>Security camera/recording device</p>
          </div>
          <div className="ttk-row">
            <Icon.AlertCircle />

            <p>Carbon Monoxide alarm</p>
          </div>
          <div className="ttk-row">
            <Icon.AlertTriangle />
            <p>Smoke alarm</p>
          </div>
        </div>
        <div className="column">
          <h3>Cancellation Policy</h3>

          <div className="ttk-row">
            <Icon.PlusCircle />
            <p>Add your trip to get the cancellation details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
