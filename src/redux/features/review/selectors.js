export const selectReviewModule = (state) => state.review;
export const selectReviewIds = (state) => selectReviewModule(state).ids;
export const selectReview = (state, reviewId) =>
  selectReviewModule(state).entities[reviewId];
