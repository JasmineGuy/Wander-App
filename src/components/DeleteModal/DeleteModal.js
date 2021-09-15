import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import * as Icon from "react-feather";
import "./DeleteModal.css";

const DeleteModal = ({
  closeDeleteModal,
  deleteReview,
  isDeleteModalActive,
  reviewID,
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  const handleDelete = () => {
    console.log("hello");
    setIsDeleteDisabled(true);
    setDeleteConfirmation("Your review was successfully deleted");
    deleteReview(reviewID);
    closeDeleteModal();
  };

  console.log("reviewID:", reviewID);
  return (
    <div className="delete-modal">
      <Dialog
        className="delete-modal"
        isOpen={isDeleteModalActive}
        onDismiss={handleDelete}
      >
        <div className="close-x">
          <Icon.X onClick={closeDeleteModal} />
        </div>

        <div className="top-form">
          Are you sure you would like to delete this review?
        </div>
        <div className="very-bottom">
          <button
            onClick={() => handleDelete}
            className={isDeleteDisabled ? "delete-btn disabled" : "delete-btn"}
            disabled={isDeleteDisabled}
          >
            Delete Review
          </button>
        </div>
        <div className="confirmation-message">{deleteConfirmation}</div>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
