import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchReviewByRestaurnatIfNotPresent } from "@/redux/features/review/thunks/fetchReviewByRestaurantIfNotPresent";

const reviewEntityAdapter = createEntityAdapter();

const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState((state)=>{
    state.status = STATUSES.idle
  }),
  extraReducers: (builder)  => {
    builder.addCase(fetchReviewByRestaurnatIfNotPresent.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(fetchReviewByRestaurnatIfNotPresent.fulfilled, (state, {payload})=> {
      reviewEntityAdapter.addMany(state, payload);
      state.status = STATUSES.finished;
    });
    builder.addCase(fetchReviewByRestaurnatIfNotPresent.rejected, (state, {payload})=> {
      state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
    });
  }
});

export const {selectById, selectIds} = reviewEntityAdapter.getSelectors();
export const reviewReducer = reviewSlice.reducer;
