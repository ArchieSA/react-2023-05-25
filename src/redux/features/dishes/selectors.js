export const selectDishesModule = (state) => state.dishes;

export const selectDish = (state, id) => selectDishesModule(state).entities[id];
