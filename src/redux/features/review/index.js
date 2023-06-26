import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchReview } from "./thunk/fetchReview";

export const ReviewEntityAdapter = createEntityAdapter()


const reviewSlice = createSlice({
  name: "review",
  initialState: ReviewEntityAdapter.getInitialState({
    status:STATUSES.idle
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchReview.pending, (state) => {
      state.status = STATUSES.pending
    });
    builder.addCase(fetchReview.fulfilled, (state, {payload}) => {
      ReviewEntityAdapter.addMany(state, payload)
      state.status = STATUSES.finished
    })
  }
});

export const reviewReducer = reviewSlice.reducer;
