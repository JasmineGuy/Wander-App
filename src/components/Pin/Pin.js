import React from "react";

const Pin = ({ lat, lng, address }) => {
  return (
    <div className="pin-circle">
      <ion-icon name="home-sharp"></ion-icon>
    </div>
  );
};

export default Pin;
