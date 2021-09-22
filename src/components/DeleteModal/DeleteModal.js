import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import * as Icon from "react-feather";
import "./DeleteModal.css";

const DeleteModal = ({
  closeDeleteModal,
  deleteReview,
  isDeleteModalActive,
  deleteID,
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  const handleDelete = (deleteID) => {
    setIsDeleteDisabled(true);
    deleteReview(deleteID);
    setDeleteConfirmation("Your review was successfully deleted");
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteDisabled(false);
    setDeleteConfirmation("");
    closeDeleteModal();
  };

  return (
    <div className="delete-modal">
      <Dialog
        className="delete-modal"
        isOpen={isDeleteModalActive}
        onDismiss={handleDelete}
        aria-label="menu"
      >
        <div className="delete-close-x">
          <Icon.X onClick={handleCloseDeleteModal} />
        </div>

        <div className="delete-top-form">
          Are you sure you would like to delete this review?
        </div>
        <div className="delete-very-bottom">
          <button
            onClick={() => handleDelete(deleteID)}
            className={isDeleteDisabled ? "delete-btn disabled" : "delete-btn"}
            disabled={isDeleteDisabled}
          >
            Delete Review
          </button>
        </div>
        <div className="delete-confirmation-message">{deleteConfirmation}</div>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
