import { STATUSES } from "@/constants/statuses";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks/fetchUsers";

export const usersEntityAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: "user",
  initialState: usersEntityAdapter.getInitialState({
    statuses: STATUSES.idle,
  }),

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.statuses = STATUSES.pending
    });

    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      usersEntityAdapter.addMany(state, payload);

      state.statuses = STATUSES.finished;
    });

    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.statuses = payload === STATUSES.alreadyLoaded 
        ? STATUSES.finished 
        : STATUSES.failed;
    })
  }
});


export const { selectById, selectIds } = usersEntityAdapter.getSelectors();

export const userReducer = userSlice.reducer;
