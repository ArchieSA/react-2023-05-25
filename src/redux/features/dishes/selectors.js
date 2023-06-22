export const selectDishModule = (state) => state.dish
export const selectDishID = (state) => selectDishModule(state).ids
export const selectDish = (state, id) => selectDishModule(state).entities[id]