import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { enterTerm, createTodo } from "../store";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { formTerm } = useSelector((state) => {
    return state.formCombinedReducer;
  });

  // Create a function to create new todo tasks
  const handleCreateTodo = (todo) => {
    const todoTask = {
      // id: nanoid(),
      task: todo,
      completed: false,
      createdAt: Date.now(),
    };
    dispatch(createTodo(todoTask));
  };

  return (
    <div className="ui segment container">
      <div className="ui form">
        <div className="field">
          <label className="todo-label">Todo Task</label>
          <input
            type="text"
            name="todo"
            placeholder="Enter Todo Item"
            onChange={(e) => {
              return dispatch(enterTerm(e.target.value));
            }}
            value={formTerm}
          />
        </div>
        <button
          className="ui button"
          type="submit"
          onClick={() => {
            return handleCreateTodo(formTerm);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
