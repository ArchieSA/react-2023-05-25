import { normalizedDishes } from '@/mocks/normalized-fixtures';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { entities: {} };

const dishSlice = createSlice({
  name: 'dish',
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

    setDishes: (state, { payload }) => {
      normalizedDishes.forEach((dish) => {
        if (dish.id === payload) {
          state.entities[payload] = dish;
        }
      });
    },
  },
});

export const dishReducer = dishSlice.reducer;
export const dishActions = dishSlice.actions;
