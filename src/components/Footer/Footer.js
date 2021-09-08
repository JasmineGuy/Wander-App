import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="column">
        <h5>ABOUT</h5>
        <p>How Wander Works</p>
        <p>Wander Plus</p>
        <p>Careers</p>
      </div>
      <div className="column">
        <h5>COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Guest Referrals</p>
        <p>Gift Cards</p>
      </div>
      <div className="column">
        <h5>HOST</h5>
        <p>Host your Home</p>
        <p>Resource Center</p>
      </div>
      <div className="column">
        <h5>SUPPORT</h5>
        <p>Our Covid-19 Response</p>
        <p>Cancellation Options</p>
        <p>Trust and Safety</p>
      </div>
    </div>
  );
};

export default Footer;
