export const selectDish = (state) => state.dish;

export const selectDishAmount = (state, dishId) =>
  selectDish(state)[dishId] || 0;

export const selectDishList = (state) => selectDish(state).entities;
