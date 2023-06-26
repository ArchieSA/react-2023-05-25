import { STATUSES } from "@/constants/statuses";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchReviewsById } from "./thunks/fetchReviewsById";

const reviewEntityAdapter = createEntityAdapter();

const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    statuses: STATUSES.idle,
  }),

  extraReducers: (builder) => {
    builder.addCase(fetchReviewsById.pending, (state) => {
      state.statuses = STATUSES.pending;
    });

    builder.addCase(fetchReviewsById.fulfilled, (state, { payload }) => {
      reviewEntityAdapter.setMany(state, payload);
      state.statuses = STATUSES.fulfilled;
    });

    builder.addCase(fetchReviewsById.rejected, (state, { payload }) => {
      state.statuses = payload === STATUSES.alreadyLoaded 
        ? STATUSES.finished 
        : STATUSES.failed;
    });
  }
});

export const { selectById, selectIds } = reviewEntityAdapter.getSelectors();

export const reviewReducer = reviewSlice.reducer;
