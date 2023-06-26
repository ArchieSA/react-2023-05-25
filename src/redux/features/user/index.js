import { STATUSES } from '@/constants/statuses';
import { normalizedUsers } from '@/mocks/normalized-fixtures';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchUsersIfNotExist } from './thunks/fetchUserIfNotExist';

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

const userEntityAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: builder => {
    builder.addCase(fetchUsersIfNotExist.pending, state => {
      state.status = STATUSES.pending;
    });
    builder.addCase(fetchUsersIfNotExist.fulfilled, (state, { payload }) => {
      userEntityAdapter.setAll(state, payload);
      state.status = STATUSES.finished;
    });
    builder.addCase(fetchUsersIfNotExist.rejected, (state, { payload }) => {
      state.status =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    });
  },
});
export const { selectIds, selectById } = userEntityAdapter.getSelectors();
export const userReducer = userSlice.reducer;
