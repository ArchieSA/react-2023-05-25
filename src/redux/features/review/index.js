import { normalizedReviews } from '@/mocks/normalized-fixtures';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { entities: {} };

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setReviews: (state, { payload }) => {
      normalizedReviews.forEach((review) => {
        if (review.id === payload) {
          state.entities[payload] = review;
        }
      });
    },
  },
});

export const reviewReducer = reviewSlice.reducer;
export const reviewActions = reviewSlice.actions;
