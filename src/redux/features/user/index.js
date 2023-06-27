import { STATUSES } from "@/constants/statuses";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExist";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const userEntityAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchUsersIfNotExist.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchUsersIfNotExist.fulfilled,
      (state, { payload }) => {
        userEntityAdapter.setAll(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchUsersIfNotExist.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const { selectById, selectIds } = userEntityAdapter.getSelectors();
export const userReducer = userSlice.reducer;
