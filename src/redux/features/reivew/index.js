import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "@/mocks/normalized-fixtures";
import { normalized } from "@/utils/iterables";

const { entities, ids } = normalized(normalizedReviews, 'id');

const initialState = {
  entities,
  ids
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
})

export const reviewReducer = reviewSlice.reducer;