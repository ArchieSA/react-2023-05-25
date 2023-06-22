export const selectCart = (state) => state.cart;

export const selectDishAmount = (state, dishId) =>
  selectCart(state)[dishId] || 0;
