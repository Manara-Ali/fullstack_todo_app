import { createSlice } from "@reduxjs/toolkit";
import { createTodo } from "../index";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formTerm: "",
  },
  reducers: {
    enterTerm(state, action) {
      state.formTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.formTerm = "";
    });
  },
});

export const { enterTerm } = formSlice.actions;
export const formCombinedReducer = formSlice.reducer;
