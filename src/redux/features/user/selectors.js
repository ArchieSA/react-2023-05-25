import { STATUSES } from "@/constants/statuses";
import { userSelectors } from "@/redux/features/user";

export const selectUserModule = (state) => state.user;
export const selectUserIds = (state) => selectUserModule(state).ids;
export const selectUser = (state, userId) =>
  selectUserModule(state).entities[userId];
export const selectUsers = (state, userId) =>
  userSelectors.selectAll(selectUserModule(state));

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).loadingStatus;

export const selectIsUsersLoading = (state) =>
  selectUserLoadingStatus(state) === STATUSES.pending;
