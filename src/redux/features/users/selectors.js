export const selectUserModule = (state) => state.user
export const selectUserID = (state) => selectUserModule(state).ids
export const selectUser = (state, id) => selectUserModule(state).entities[id]