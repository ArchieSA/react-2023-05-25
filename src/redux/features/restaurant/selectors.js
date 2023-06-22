export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurant = (state, restaurantId) =>
  selectRestaurantModule(state).entities[restaurantId];
