import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="column">
        <h4>ABOUT</h4>
        <p>How Wander Works</p>
        <p>Wander Plus</p>
      </div>
      <div className="column">
        <h4>COMMUNITY</h4>
        <p>Diversity & Belonging</p>
        <p>Guest Referrals</p>
      </div>
      <div className="column">
        <h4>SUPPORT</h4>
        <p>Our Covid-19 Response</p>
        <p>Cancellation Options</p>
      </div>
    </div>
  );
};

export default Footer;
