import { STATUSES } from "@/constants/statuses";
import { selectById, selectIds } from ".";


export const selectUserModule = (state) => state.user;
export const selectUserIds = (state) => selectIds(selectUserModule(state));
export const selectUser = (state, userId) =>
  selectById(selectUserModule(state), userId);

export const selectUsersAreLoading = (state) => selectUserModule(state).status === STATUSES.pending;