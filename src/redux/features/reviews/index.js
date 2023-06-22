import { normalizedReviews } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

const slice = createSlice({
  name: "reviews",
  initialState,
});

export const reviewsReducer = slice.reducer;
