import { STATUSES } from "@/constants/statuses";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExisted";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: STATUSES.idle,
  }),
  extraReducers: {
    [fetchUsersIfNotExist.pending]: (state) => {
      state.loadingStatus = STATUSES.pending;
    },
    [fetchUsersIfNotExist.fulfilled]: (state, { payload }) => {
      state.loadingStatus = STATUSES.finished;
      userEntityAdapter.setAll(state, payload);
    },
    [fetchUsersIfNotExist.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    },
  },
});

export const userSelectors = userEntityAdapter.getSelectors();
export const userReducer = userSlice.reducer;
