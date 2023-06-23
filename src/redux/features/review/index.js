import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "@/mocks/normalized-fixtures";
import { entityToSlice } from '../../utils'

const INITIAL_STATE = entityToSlice(normalizedReviews);

const { reducer: reviewReducer, actions: reviewActions } = createSlice({
  name: "review",
  initialState: INITIAL_STATE,
});

export { reviewReducer, reviewActions }

