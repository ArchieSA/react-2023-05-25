import { createEntityAdapter } from "@reduxjs/toolkit";
import { MODULE_NAME } from './const'

export const restaurantEntityAdapter = createEntityAdapter({
  selectId: (entity) => entity.id,
});

// Adapter selectors
export const { selectById, selectIds } = restaurantEntityAdapter.getSelectors();
// Main
export const selectRestaurantModule = (state) => state[MODULE_NAME];
// System
export const selectStatus = (state) => selectRestaurantModule(state).status
export const selectError = (state) => selectRestaurantModule(state).error
export const selectRestaurantIds = (state) =>
  selectIds(selectRestaurantModule(state));
// Custom
export const selectRestaurant = (state, restaurantId) => 
  selectById(selectRestaurantModule(state), restaurantId);

export const selectRestaurantDishIds = (state, restaurantId) =>
  selectRestaurant(state, restaurantId)?.menu;

export const selectRestaurantReviewIds = (state, restaurantId) =>
  selectRestaurant(state, restaurantId)?.reviews;
