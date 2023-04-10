import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store";
import { ModalContext } from "../context/ModalContext";

const ConfirmDelete = () => {
  const dispatch = useDispatch();

  const { setModalOpen, editEl } = useContext(ModalContext);

  const handleModalClose = () => {
    document.querySelector(".app-container").classList.remove("blur");
    setModalOpen(false);
  };

  // Create a function to delete a task
  const handleDeleteTodo = (todo) => {
    document.querySelector(".app-container").classList.remove("blur");
    setModalOpen(false);
    dispatch(deleteTodo(todo));
  };

  return (
    <div className="modal-message ui segment">
      <div className="ui form">
        <div className="field">
          <label>Are you sure you want to delete "{editEl.task}"?</label>
        </div>
        <div className="button-container">
          <button
            className="ui button"
            type="submit"
            onClick={() => handleModalClose()}
          >
            Cancel
          </button>
          <button
            className="ui button"
            type="submit"
            onClick={() => {
              handleDeleteTodo(editEl);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
