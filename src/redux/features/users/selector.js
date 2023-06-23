export const selectUsersModule = (state) => state.users
export const selectUsersId = (state) => selectUsersModule(state).ids
export const selectUsers = (state, usersId) => selectUsersModule(state).entities[usersId].name