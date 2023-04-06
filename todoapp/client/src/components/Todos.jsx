import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store";

const Todos = () => {
  // Create a dispatch function
  const dispatch = useDispatch();

  const { data: todos } = useSelector((state) => {
    return state.todosCombinedReducer;
  });

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
            <i className="trash alternate outline icon"></i>
            <i class="edit outline icon"></i>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="todo-list">
      <div className="header">
        <p id="task">Task</p>
        <p id="created">Created On</p>
        <p id="actions">Actions</p>
      </div>
      {todosList}
    </div>
  );
};

export default Todos;
