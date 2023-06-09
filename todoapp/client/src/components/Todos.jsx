import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store";
import Modal from "./Modal";
import { ModalContext } from "../context/ModalContext";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmUpdate from "./ConfirmUpdate";

const Todos = () => {
  // Create a dispatch function
  const dispatch = useDispatch();

  const { modalOpen, setModalOpen, setEditEl } = useContext(ModalContext);

  const [confirmModal, setConfirmModal] = useState(null);

  const { data: todos } = useSelector((state) => {
    return state.todosCombinedReducer;
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // // Create a function to delete a task
  // const handleDeleteTodo = (todo) => {
  //   dispatch(deleteTodo(todo));
  // };

  const handleModal = (obj) => {
    setEditEl(obj);
    document.querySelector(".app-container").classList.add("blur");
    setModalOpen(true);
  };

  const todosList = todos.map((element) => {
    // console.log(element);
    return (
      <div key={element._id} className="ui celled list">
        <div className="item task">
          <div className="content">{element.task}</div>
        </div>
        <div className="item created">
          <div className="content">{element.createdAt}</div>
        </div>
        <div className="item actions">
          <div className="content icons">
            <i
              className="trash alternate outline icon"
              onClick={() => {
                // handleDeleteTodo(element);
                setConfirmModal(<ConfirmDelete />);
                return handleModal(element);
              }}
            ></i>
            <i
              className="edit outline icon"
              onClick={() => {
                setConfirmModal(<ConfirmUpdate />);
                return handleModal(element);
              }}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="todo-list">
      <div className="header">
        <p id="task">Task</p>
        <p id="created">Created On</p>
        <p id="actions">Actions</p>
      </div>
      {todosList}
      {modalOpen && <Modal>{confirmModal}</Modal>}
    </div>
  );
};

export default Todos;
