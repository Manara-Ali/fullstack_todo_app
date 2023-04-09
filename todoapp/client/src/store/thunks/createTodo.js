import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTodo = createAsyncThunk("todo/create", async (todo) => {
  await axios.post("https://todo-app-l60y.onrender.com/api/v1/todos", todo);
  return todo;
});
