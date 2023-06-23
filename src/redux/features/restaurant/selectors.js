export const selectRestaurantModule = (state) => state.restaurant;
export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurant = (state, restaurantId) =>
  selectRestaurantModule(state).entities[restaurantId];
export const selectRestaurantMenu = (state, restaurantId) =>
selectRestaurantModule(state).entities[restaurantId].menu;
export const selectRestaurantReviews = (state, restaurantId) =>
selectRestaurantModule(state).entities[restaurantId].reviews;
