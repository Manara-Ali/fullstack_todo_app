import { configureStore } from "@reduxjs/toolkit";
import { todosCombinedReducer } from "./slices/todosSlice";
import { fetchTodos } from "./thunks/fetchTodos";

export const store = configureStore({
  reducer: {
    todosCombinedReducer,
  },
});

export { fetchTodos };
