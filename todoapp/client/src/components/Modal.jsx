import React from "react";
import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <h1>I am a modal</h1>
      </div>
    </div>,
    document.querySelector("#portal-container")
  );
};

export default Modal;
