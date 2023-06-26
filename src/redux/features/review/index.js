import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchReviewsIfNotExist } from "./thunks/fetchReviewsifNotExist";
import { STATUSES } from "@/constants/statuses";

export const reviewEntityAdapter = createEntityAdapter();

const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchReviewsIfNotExist.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchReviewsIfNotExist.fulfilled,
      (state, { payload }) => {
        reviewEntityAdapter.addMany(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchReviewsIfNotExist.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const reviewReducer = reviewSlice.reducer;
export const { selectById, selectIds } = reviewEntityAdapter.getSelectors();
