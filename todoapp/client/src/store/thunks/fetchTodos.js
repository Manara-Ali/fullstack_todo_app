import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get(
    "https://todo-app-l60y.onrender.com/api/v1/todos"
  );

  const { data } = response.data;

  return data.todos;
});
