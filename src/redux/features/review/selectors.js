export const selectReview = (state) => state.review;

export const selectReviewList = (state) => selectReview(state).entities;
