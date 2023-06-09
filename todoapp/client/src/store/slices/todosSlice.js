import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../thunks/fetchTodos";
import { createTodo } from "../thunks/createTodo";
import { deleteTodo } from "../thunks/deleteTodo";
import { updateTodo } from "../thunks/updateTodo";
import { current } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.data = state.data.filter((element) => {
        return element._id !== action.payload._id;
      });
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.data = state.data.map((element) => {
        return element._id === action.payload._id ? action.payload : element;
      });
    });
  },
});

export const todosCombinedReducer = todosSlice.reducer;
