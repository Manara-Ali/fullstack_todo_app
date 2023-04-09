import React, { useContext, useState } from "react";
import { updateTodo } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../context/ModalContext";

const ConfirmUpdate = () => {
  const { editEl, setModalOpen } = useContext(ModalContext);

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleModalClose = () => {
    document.querySelector(".app-container").classList.remove("blur");
    setModalOpen(false);
  };

  // Create a function to update a task
  const handleTaskUpdate = (element, input) => {
    dispatch(updateTodo({ ...element, task: input }));
    document.querySelector(".app-container").classList.remove("blur");
    setModalOpen(false);
  };

  return (
    <div className="modal-message ui segment">
      <div className="ui form">
        <div className="field">
          <label>Task</label>
          <input
            type="text"
            name="task"
            placeholder={editEl.task}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
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
              return handleTaskUpdate(editEl, input);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUpdate;
