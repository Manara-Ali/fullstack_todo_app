import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteTodo = createAsyncThunk("todo/delete", async (todo) => {
  await axios.delete(
    `https://todo-app-l60y.onrender.com/api/v1/todos/${todo.id}`
  );
  return todo;
});
