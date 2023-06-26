import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { dishThunk } from "./thunks/dishThunk";

export const dishEntiyAdapter = createEntityAdapter()

const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntiyAdapter.getInitialState({
    status: STATUSES.idle,
    visit: [],
  }),
  extraReducers: (bilder) => {
    bilder.addCase(dishThunk.pending, (state) => {
      state.status = STATUSES.pending;
    });
    bilder.addCase(dishThunk.fulfilled, (state, { payload }) => {
      state.visit.push(payload.id)
      dishEntiyAdapter.upsertMany(state, payload.dishes)
      state.status = STATUSES.fulfilled;
    });
    bilder.addCase(dishThunk.rejected, (state, { payload }) => {
      state.status =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    });
  }
});

export const { selectById, selectIds } = dishEntiyAdapter.getSelectors()
export const dishReducer = dishSlice.reducer;
