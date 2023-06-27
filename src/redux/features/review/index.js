import { STATUSES } from "@/constants/statuses";
import { fetchReviewsByRestaurant } from "@/redux/features/review/thunk/fetchReviewsByRestaurant";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const reviewEntityAdapter = createEntityAdapter();

const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchReviewsByRestaurant.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchReviewsByRestaurant.fulfilled,
      (state, { payload }) => {
        reviewEntityAdapter.setAll(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchReviewsByRestaurant.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const { selectById, selectIds } = reviewEntityAdapter.getSelectors();
export const reviewReducer = reviewSlice.reducer;
