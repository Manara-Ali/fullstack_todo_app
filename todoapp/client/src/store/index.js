import { configureStore } from "@reduxjs/toolkit";
import { todosCombinedReducer } from "./slices/todosSlice";
import { formCombinedReducer, enterTerm } from "./slices/formSlice";
import { fetchTodos } from "./thunks/fetchTodos";
import { createTodo } from "./thunks/createTodo";
import { deleteTodo } from "./thunks/deleteTodo";

export const store = configureStore({
  reducer: {
    todosCombinedReducer,
    formCombinedReducer,
  },
});

export { fetchTodos, createTodo, deleteTodo, enterTerm };
