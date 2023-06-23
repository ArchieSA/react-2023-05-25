export const selectCartModule = (state) => state.cart;

export const selectDishAmount = (state, dishId) =>
  selectCartModule(state)[dishId] || 0;
