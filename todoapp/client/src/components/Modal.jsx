import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../context/ModalContext";
import ConfirmUpdate from "./ConfirmUpdate";

const Modal = ({ children }) => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const handleModalClose = (e) => {
    if (e.target === document.querySelector(".modal-container")) {
      document.querySelector(".app-container").classList.remove("blur");
      setModalOpen(false);
    }
  };
  return createPortal(
    <div className="modal-container" onClick={(e) => handleModalClose(e)}>
      <div className="modal-content">
        {/* <Confirmation /> */}
        {children}
      </div>
    </div>,
    document.querySelector("#portal-container")
  );
};

export default Modal;
