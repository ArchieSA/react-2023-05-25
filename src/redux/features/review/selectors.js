export const selectReviewModule = state => state.review;
export const selectReviewIds = state => selectUserModule(state).id;
export const selectReview = (state, reviewId) =>
  selectReviewModule(state).entities[reviewId];
