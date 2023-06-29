import { STATUSES } from "@/constants/statuses";

export const selectReviewModule = (state) => state.review;
export const selectReviewIds = (state) => selectReviewModule(state).ids;
export const selectReview = (state, reviewId) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewLoadingStatus = (state) =>
  selectReviewModule(state).loadingStatus;

export const selectIsReviewLoading = (state) =>
  selectReviewLoadingStatus(state) === STATUSES.pending;
