import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { fetchReviewsByRestaurant } from "./thunks/fetchReviewsByRestaurant";
import { reviewEntityAdapter } from './selectors'
import { MODULE_NAME } from './const'
import {
  initialStateFactory,
  initializingReducer,
  errorReducer,
} from "../../utils";


export const { reducer: reviewReducer, actions: reviewActions } = createSlice({
  name: MODULE_NAME,
  initialState: initialStateFactory(reviewEntityAdapter),

  extraReducers: (builder) => builder
    .addCase(fetchReviewsByRestaurant.pending, initializingReducer)

    .addCase(fetchReviewsByRestaurant.fulfilled, (state, { payload }) => {
      reviewEntityAdapter.setMany(state, payload);
      state.status = STATUSES.finished;
      state.ts = new Date().getTime();
    })

    .addCase(fetchReviewsByRestaurant.rejected, errorReducer),
});

