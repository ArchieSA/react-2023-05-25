export const selectReviewModule = (state) => state.review
export const selectReviewID = (state) => selectReviewModule(state).ids
export const selectReview = (state, id) => selectReviewModule(state).entities[id]