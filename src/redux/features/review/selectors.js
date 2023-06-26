import { STATUSES } from '@/constants/statuses';
import { selectById, selectIds } from './index'

export const selectReviewModule = (state) => state.review;
export const selectReviewIds = (state) => selectIds(state);
export const selectReview = (state, reviewId) => selectById(selectReviewModule(state), reviewId) ?? {};
export const selectReviewIsLoading = (state) => selectReviewModule(state).statuses === STATUSES.pending;
