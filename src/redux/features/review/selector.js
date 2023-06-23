export const selectReviewsModule = (state) => state.reviews
export const selectReviewsId = (state) => selectReviewsModule(state).ids
export const selectReviews = (state, reviewId) => 
    selectReviewsModule(state).entities[reviewId]