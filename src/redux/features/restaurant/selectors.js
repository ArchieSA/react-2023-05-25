import { selectById, selectIds } from '@/redux/features/restaurant';

export const selectRestaurantModule = state => state.restaurant;

export const selectRestaurantIds = state =>
  selectIds(selectRestaurantModule(state));

export const selectRestaurant = (state, restaurantId) =>
  selectById(selectRestaurantModule(state), restaurantId);

export const selectRestaurantStatus = state =>
  selectRestaurantModule(state).status;
export const selectRestaurantDishIds = (state, restaurantId) =>
  selectRestaurant(state, restaurantId)?.menu;

export const selectRestaurantReviewIds = (state, restaurantId) =>
  selectRestaurant(state, restaurantId)?.reviews;
