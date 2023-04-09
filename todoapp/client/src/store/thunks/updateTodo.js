import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateTodo = createAsyncThunk(
  "todo/update",
  async (updatedTodo) => {
    await axios.patch(
      `http://localhost:3005/todos/${updatedTodo.id}`,
      updateTodo
    );

    return updatedTodo;
  }
);
