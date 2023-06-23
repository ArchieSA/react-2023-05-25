import { selectUser } from '../user/selectors'

export const selectReviewModule = (state) => state.review;

export const selectReviewModuleIds = (state) => selectReviewModule(state).ids;

export const selectReview = (state, reviewId) => {
  const review = selectReviewModule(state).entities[reviewId]
  if (!review) {
    return review
  }

  const { userId, ...rest } = review

  return {
    ...rest,
    user: selectUser(state, userId)
  }
}
