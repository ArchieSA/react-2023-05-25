import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchUsersIfNotExist } from "./thunks/fetchUsersIfNotExist";

const usersEntityAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: "user",
  initialState: usersEntityAdapter.getInitialState((state) => {
    state.status = STATUSES.idle;
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchUsersIfNotExist.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(fetchUsersIfNotExist.fulfilled, (state, {payload}) => {
      usersEntityAdapter.setAll(state, payload);
      state.status = STATUSES.finished;
    });
    builder.addCase(fetchUsersIfNotExist.rejected, (state, {payload}) => {
      state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
    });
  }
});

export const {selectIds, selectById} = usersEntityAdapter.getSelectors()
export const userReducer = userSlice.reducer;
