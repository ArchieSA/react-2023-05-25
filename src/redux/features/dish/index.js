import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDishByRestaurantIdIfNotExist } from "./thunk/fetchDishByRestaurantIdIfNotExist";

const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    loadingStatus: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishByRestaurantIdIfNotExist.pending, (state) => {
        state.loadingStatus = STATUSES.pending;
      })
      .addCase(
        fetchDishByRestaurantIdIfNotExist.fulfilled,
        (state, { payload }) => {
          state.loadingStatus = STATUSES.finished;
          dishEntityAdapter.addMany(state, payload);
        }
      )
      .addCase(
        fetchDishByRestaurantIdIfNotExist.rejected,
        (state, { payload }) => {
          state.loadingStatus =
            payload === STATUSES.alreadyLoaded
              ? STATUSES.finished
              : STATUSES.failed;
        }
      );
  },
});

export const dishReducer = dishSlice.reducer;
