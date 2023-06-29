import { STATUSES } from "@/constants/statuses";
import { fetchDishByRestaurantIdIfNotExist } from "@/redux/features/dish/thunk/fetchDishByRestaurantIdIfNotExist";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

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
