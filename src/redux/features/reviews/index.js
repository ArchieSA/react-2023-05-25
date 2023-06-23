import { normalizedRestaurants } from '@/mocks/normalized-fixtures';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setIds: (state, { payload }) => {
      normalizedRestaurants.forEach((restaurant) => {
        if (restaurant.id === payload) {
          state.ids = restaurant.reviews;
        }
      });
    },
  },
});

export const reviewsReducer = reviewsSlice.reducer;
export const reviewsActions = reviewsSlice.actions;
