import {selectIds, selectById} from '@/redux/features/user';

export const selectUserModule = (state) => state.user;
export const selectUserIds = (state) => selectIds(selectUserModule(state));
export const selectUser = (state, userId) => selectById(selectUserModule(state), userId);
export const selectUserStatus = (state) => selectUserModule(state).status;
