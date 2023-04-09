import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo, updateTodo } from "../store";
import Modal from "./Modal";

const Todos = () => {
  // Create a dispatch function
  const dispatch = useDispatch();

  const { data: todos } = useSelector((state) => {
    return state.todosCombinedReducer;
  });

  // Create a function to delete a task
  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo));
  };

  // Create a function to update a task
  const handleUpdate = (element, input) => {
    dispatch(updateTodo({ ...element, task: input }));
  };

  const todosList = todos.map((element) => {
    console.log(element.id);
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
            <i className="edit outline icon"></i>
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
      <Modal />
    </div>
  );
};

export default Todos;
