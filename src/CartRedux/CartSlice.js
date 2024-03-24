import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("added-items")
    ? JSON.parse(localStorage.getItem("added-items"))
    : null,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    sajib: (state, action) => {
      state.value = action.payload;
      console.log(action.payload.quantity);
    },
    sajib: (state, action) => {
      state.value = action.payload;
      console.log(action.payload.quantity);
    },
  },
});

export const { sajib } = counterSlice.actions;

export default counterSlice.reducer;
