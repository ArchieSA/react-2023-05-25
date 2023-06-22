import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const currentValue = state[payload] || 0;
      state[payload] = currentValue + 1;
    },
    decrement: (state, { payload }) => {
      const currentValue = state[payload];

      if (!currentValue) {
        return;
      }

      if (currentValue === 1) {
        delete state[payload];

        return;
      }

      state[payload] = currentValue - 1;
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
