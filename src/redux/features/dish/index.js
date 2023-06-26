import { STATUSES } from "@/constants/statuses";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchDishById } from "./thunks/fetchDishByid";

const dishEntityAdapter = createEntityAdapter();

const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    statuses: STATUSES.idle,
  }),

  extraReducers: (builder) => {
    builder.addCase(fetchDishById.pending, (state) => {
      state.statuses = STATUSES.pending;
    });

    builder.addCase(fetchDishById.fulfilled, (state, { payload }) => {
      dishEntityAdapter.addMany(state, payload);
      state.statuses = STATUSES.fulfilled;
    });

    builder.addCase(fetchDishById.rejected, (state, { payload }) => {
      state.statuses = payload === STATUSES.alreadyLoaded 
        ? STATUSES.finished 
        : STATUSES.failed;
    });
  }
});

export const { selectById, selectIds } = dishEntityAdapter.getSelectors();

export const dishReducer = dishSlice.reducer;
