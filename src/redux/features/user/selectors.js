import { STATUSES } from "@/constants/statuses";

export const selectUserModule = (state) => state.user;
export const selectUserIds = (state) => selectUserModule(state).ids;
export const selectUser = (state, userId) =>
  selectUserModule(state).entities[userId];

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).loadingStatus;

export const selectIsUsersLoading = (state) =>
  selectUserLoadingStatus(state) === STATUSES.pending;
