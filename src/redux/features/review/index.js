import { normalizedReviews } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
});

export const reviewReducer = reviewSlice.reducer;
