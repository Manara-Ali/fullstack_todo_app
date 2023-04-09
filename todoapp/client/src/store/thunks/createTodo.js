import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTodo = createAsyncThunk("todo/create", async (todo) => {
  await axios.post("http://localhost:3005/todos", todo);
  return todo;
});
