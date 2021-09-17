import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import * as Icon from "react-feather";

import "./ConfirmModal.css";

const ConfirmModal = ({
  property,
  isConfirmModalActive,
  closeConfirmModal,
  endDate,
  startDate,
}) => {
  const [reservationMessage, setReservationMessage] = useState("");

  const handleConfirm = () => {
    console.log("clicked confirm");
    setReservationMessage(
      "Thank you for finalizing your reservation. Your host will be  reaching out with further instructions"
    );
    closeConfirmModal();
  };
  return (
    <div>
      <Dialog
        className="modal"
        isOpen={isConfirmModalActive}
        onDismiss={closeConfirmModal}
        aria-label="menu-3"
      >
        {property ? (
          <>
            <div className="close-x">
              <Icon.X onClick={closeConfirmModal} />
            </div>
            <div className="title">
              <p>Your reservation details:</p>
            </div>
            <div className="details">
              <div className="image-container">
                <img alt="feature-img" src={property.cover_pic} id="pic" />
              </div>
              <div className="whole-thing">
                <div className="hard-details">
                  <div className="left-hd">
                    <h3>
                      {property.name} Hosted by {property.f_name}
                    </h3>
                    <h4>
                      {property.address} {property.city}, {property.state}
                    </h4>
                  </div>
                  <div className="right-hd">
                    <button onClick={() => handleConfirm}>Confirm</button>
                  </div>
                </div>
                <div className="email-message">{reservationMessage}</div>
              </div>
            </div>
          </>
        ) : null}
      </Dialog>
    </div>
  );
};

export default ConfirmModal;
