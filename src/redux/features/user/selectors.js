import { selectById, selectIds } from './index';

export const selectUserModule = (state) => state.user;
export const selectUserIds = (state) => selectIds(selectUserModule(state));
export const selectUser = (state, userId) => selectById(selectUserModule(state), userId);
