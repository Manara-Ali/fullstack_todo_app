import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateTodo = createAsyncThunk(
  "todo/update",
  async (updatedTodo) => {
    console.log(updatedTodo);
    await axios({
      url: `http://localhost:3005/todos/${updatedTodo.id}`,
      method: "PATCH",
      data: updatedTodo,
    });

    return updatedTodo;
  }
);
