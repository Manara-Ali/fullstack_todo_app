import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateTodo = createAsyncThunk(
  "todo/update",
  async (updatedTodo) => {
    console.log(updatedTodo);
    await axios({
      url: `https://todo-app-l60y.onrender.com/api/v1/todos/${updatedTodo._id}`,
      method: "PATCH",
      data: updatedTodo,
    });

    return updatedTodo;
  }
);
