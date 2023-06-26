import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunk/fetchUsers";
import { STATUSES } from "@/constants/statuses";

export const usersEntityAdapter = createEntityAdapter()

const userSlice = createSlice({
  name: "user",
  initialState: usersEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload }) => {
        usersEntityAdapter.setAll(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchUsers.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const userReducer = userSlice.reducer;
