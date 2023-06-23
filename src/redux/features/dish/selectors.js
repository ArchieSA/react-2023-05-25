export const selectDishModule = (state) => state.dish;

export const selectDishModuleIds = (state) => selectDishModule(state).ids;

export const selectDish = (state, dishId) =>
  selectDishModule(state).entities[dishId];
