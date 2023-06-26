import { STATUSES } from '@/constants/statuses';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchReviewByRestaurantId } from './thunks/fetchReviewByRestaurantId';

const reviewEntityAdapter = createEntityAdapter();

const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: builder => {
    builder.addCase(fetchReviewByRestaurantId.pending, state => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchReviewByRestaurantId.fulfilled,
      (state, { payload }) => {
        reviewEntityAdapter.setMany(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchReviewByRestaurantId.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});
export const {selectById, selectIds} = reviewEntityAdapter.getSelectors();
export const reviewReducer = reviewSlice.reducer;
