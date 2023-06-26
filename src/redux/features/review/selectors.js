import { STATUSES } from "@/constants/statuses";
import { selectById, selectIds } from ".";

export const selectReviewModule = (state) => state.review;
export const selectReviewIds = (state) => selectIds(selectReviewModule(state));
export const selectReview = (state, reviewId) => selectById(selectReviewModule(state), reviewId);
export const selectReviewIsLoading = (state) => selectReviewModule(state).status === STATUSES.pending;