import { STATUSES } from "@/constants/statuses";
import { selectById, selectIds } from "@/redux/features/restaurant";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) =>
  selectIds(selectRestaurantModule(state));

export const selectRestaurant = (state, restaurantId) =>
  selectById(selectRestaurantModule(state), restaurantId);

export const selectRestaurantDishIds = (state, restaurantId) =>
  selectRestaurant(state, restaurantId)?.menu;

export const selectRestaurantReviewIds = (state, restaurantId) =>
  selectRestaurant(state, restaurantId)?.reviews;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === STATUSES.pending;
