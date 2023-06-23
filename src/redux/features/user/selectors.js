export const selectUserModule = (state) => state.user;

export const selectUserModuleIds = (state) => selectUserModule(state).ids;

export const selectUser = (state, userId) =>
  selectUserModule(state).entities[userId];
