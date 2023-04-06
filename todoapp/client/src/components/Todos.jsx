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
      <div key={element.id}>
        <p>{element.task}</p>
      </div>
    );
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>Todos Here</h1>
      {todosList}
    </div>
  );
};

export default Todos;
