import { STATUSES } from "@/constants/statuses";
import { createNewReview } from "@/redux/features/review/thunks/createNewReview";
import { fetchReviewsByRestaurantIdIfNotExist } from "@/redux/features/review/thunks/fetchReviewsByRestaurantIdIfNotExist";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    loadingStatus: STATUSES.idle,
  }),
  extraReducers: {
    [fetchReviewsByRestaurantIdIfNotExist.pending]: (state) => {
      state.loadingStatus = STATUSES.pending;
    },
    [fetchReviewsByRestaurantIdIfNotExist.fulfilled]: (state, { payload }) => {
      state.loadingStatus = STATUSES.finished;
      reviewEntityAdapter.setMany(state, payload);
    },
    [fetchReviewsByRestaurantIdIfNotExist.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    },
    [createNewReview.fulfilled]: (state, { payload }) => {
      reviewEntityAdapter.addOne(state, payload.review);
    },
  },
});
export const reviewReducer = reviewSlice.reducer;
