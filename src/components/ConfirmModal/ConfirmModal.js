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
    setReservationMessage(
      "Thank you for confirming your reservation. Your host will be reaching out with further instructions"
    );
    setTimeout(() => {
      closeConfirmModal();
    }, 3000);
  };

  return (
    <div>
      <Dialog
        className="confirm-modal"
        isOpen={isConfirmModalActive}
        onDismiss={closeConfirmModal}
        aria-label="menu-3"
      >
        {property ? (
          <>
            <div className="confirm-close-x">
              <Icon.X onClick={closeConfirmModal} />
            </div>
            <div className="confirm-title">
              <p>Your reservation details:</p>
            </div>
            <div className="confirm-details">
              <div className="confirm-image-container">
                <img
                  alt="confirm-feature-img"
                  src={property.cover_pic}
                  id="pic"
                />
              </div>
              <div className="confirm-whole-thing">
                <div className="confirm-hard-details">
                  <div className="confirm-left-hd">
                    <h3>
                      {property.name} Hosted by {property.f_name}
                    </h3>
                    <h4>
                      {property.address} {property.city}, {property.state}
                    </h4>
                  </div>
                  <div className="confirm-right-hd">
                    <button onClick={handleConfirm}>Confirm</button>
                  </div>
                </div>
                <div className="confirm-email-message">
                  <p>{reservationMessage}</p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Dialog>
    </div>
  );
};

export default ConfirmModal;
