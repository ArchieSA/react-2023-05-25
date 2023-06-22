export const selectUsersModule = (state) => state.users;

export const selectUser = (state, id) => selectUsersModule(state).entities[id];
