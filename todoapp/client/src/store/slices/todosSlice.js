import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../thunks/fetchTodos";

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
  },
});

export const todosCombinedReducer = todosSlice.reducer;
