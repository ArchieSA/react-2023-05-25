import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { reviewThunk } from "./thunks/reviewThunk";

export const reviewEntiyAdapter = createEntityAdapter()


const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntiyAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (bilder) => {
    bilder.addCase(reviewThunk.pending, (state) => {
      state.status = STATUSES.pending;
    });
    bilder.addCase(reviewThunk.fulfilled, (state, { payload }) => {
      reviewEntiyAdapter.upsertMany(state, payload)
      state.status = STATUSES.fulfilled;
    });
    bilder.addCase(reviewThunk.rejected, (state, { payload }) => {
      state.status =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    });
  }
});

export const { selectById, selectIds } = reviewEntiyAdapter.getSelectors()
export const reviewReducer = reviewSlice.reducer;
