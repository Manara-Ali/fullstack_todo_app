import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../thunks/fetchTodos";
import { createTodo } from "../thunks/createTodo";

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
  },
});

export const todosCombinedReducer = todosSlice.reducer;
