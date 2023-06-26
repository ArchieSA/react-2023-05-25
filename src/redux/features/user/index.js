import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { userThunk } from "./thunks/userThunk";

export const userEntityAdapter = createEntityAdapter()

const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (bilder) => {
    bilder.addCase(userThunk.pending, (state) => {
      state.status = STATUSES.pending;
    });
    bilder.addCase(userThunk.fulfilled, (state, { payload }) => {
      userEntityAdapter.setAll(state, payload)
      state.status = STATUSES.fulfilled;
    });
    bilder.addCase(userThunk.rejected, (state, { payload }) => {
      state.status =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    });
  }
});

export const { selectById, selectIds } = userEntityAdapter.getSelectors()
export const userReducer = userSlice.reducer;
