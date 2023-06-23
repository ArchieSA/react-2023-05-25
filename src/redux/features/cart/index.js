import { createSlice } from "@reduxjs/toolkit";

// { dish_id: order_count }
const INITIAL_STATE = {};

const { reducer: cartReducer, actions: cartActions } = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,

  reducers: {
    increment: (state, { payload }) => {
      state[payload] ? state[payload]++ : state[payload] = 1
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

      state[payload]--;
    },

    reset: () => INITIAL_STATE,
  },
});

export { cartReducer, cartActions }
