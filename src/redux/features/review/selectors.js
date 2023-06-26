import { selectById, selectIds } from './index';

export const selectReviewModule = state => state.review;
export const selectReviewIds = state => selectIds(selectReviewModule(state));
export const selectReview = (state, reviewId) =>
  selectById(selectReviewModule(state), reviewId);
export const selectReviewStatus = state => selectReviewModule(state).status;
