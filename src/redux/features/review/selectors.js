import { createEntityAdapter } from "@reduxjs/toolkit";
import { MODULE_NAME } from './const'

export const reviewEntityAdapter = createEntityAdapter({
  selectId: (entity) => entity.id,
});

// Adapter selectors
export const { selectById, selectIds } = reviewEntityAdapter.getSelectors();
// Main
export const selectReviewModule = (state) => state[MODULE_NAME];
// System
export const selectStatus = (state) => selectReviewModule(state).status
export const selectError = (state) => selectReviewModule(state).error
export const selectReviewIds = (state) =>
  selectIds(selectReviewModule(state));

// Custom
export const selectReview = (state, reviewId) =>
  selectById(selectReviewModule(state), reviewId);
