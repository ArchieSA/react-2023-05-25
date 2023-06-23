export const selectMenuModule = (state) => state.menu
export const selectMenu = (state, dishId) => selectMenuModule(state)?.entities[dishId]