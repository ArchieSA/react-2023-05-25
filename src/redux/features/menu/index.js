import { normalizedRestaurants } from '@/mocks/normalized-fixtures';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setIds: (state, { payload }) => {
      normalizedRestaurants.forEach((restaurant) => {
        if (restaurant.id === payload) {
          state.ids = restaurant.menu;
        }
      });
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const menuActions = menuSlice.actions;
