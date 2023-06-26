import { STATUSES } from '@/constants/statuses';
import { selectById, selectIds } from './index'

export const selectReviewModule = (state) => state.review;
export const selectReviewIds = (state) => selectIds(state);
export const selectReview = (state, reviewId) => selectById(selectReviewModule(state), reviewId) ?? {};
export const selectReviewIsLoading = (state) => selectReviewModule(state).statuses === STATUSES.pending;

// так себе решение лучше бы хранить в виде дерева, тк в текущем нужно линейно искать вхождение по id сущности
// я бы сделал так:
// [RestaurantId]: {
//   ids: ReviewsId[];
//   entities: Record<ReviewsId, Reviews>;
// }
export const selectHasReviewByRestaurantId = (state, id) => (
  Object.values(selectReviewModule(state).entities).some(({ restaurantId }) => restaurantId === id)
)