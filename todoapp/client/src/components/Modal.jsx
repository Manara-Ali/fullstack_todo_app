import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const handleModalClose = () => {
    document.querySelector(".app-container").classList.remove("blur");
    setModalOpen(false);
  };
  return createPortal(
    <div
      className="modal-container"
      onClick={() => {
        return handleModalClose();
      }}
    >
      <div className="modal-content">{/* <h1>I am a modal</h1> */}</div>
    </div>,
    document.querySelector("#portal-container")
  );
};

export default Modal;
