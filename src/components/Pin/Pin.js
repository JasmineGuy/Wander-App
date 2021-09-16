import React from "react";
import "./Pin.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const Pin = ({ address }) => {
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{address}</p>
    </div>
  );
};

export default Pin;
