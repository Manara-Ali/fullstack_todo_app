import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../store";
import Modal from "./Modal";
import { ModalContext } from "../context/ModalContext";

const Todos = () => {
  // Create a dispatch function
  const dispatch = useDispatch();

  const { modalOpen, setModalOpen, setEditEl } = useContext(ModalContext);

  const { data: todos } = useSelector((state) => {
    return state.todosCombinedReducer;
  });

  // Create a function to delete a task
  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const handleModal = (obj) => {
    setEditEl(obj);
    document.querySelector(".app-container").classList.add("blur");
    setModalOpen(true);
  };

  const todosList = todos.map((element) => {
    return (
      <div key={element.id} className="ui celled list">
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
                handleDeleteTodo(element);
              }}
            ></i>
            <i
              className="edit outline icon"
              onClick={() => {
                // console.log(element);
                return handleModal(element);
              }}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todo-list">
      <div className="header">
        <p id="task">Task</p>
        <p id="created">Created On</p>
        <p id="actions">Actions</p>
      </div>
      {todosList}
      {modalOpen && <Modal />}
    </div>
  );
};

export default Todos;
