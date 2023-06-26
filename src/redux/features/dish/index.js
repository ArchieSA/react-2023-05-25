import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDishesIfNotExist } from "./thunks/fetchDishesifNotExist";
import { STATUSES } from "@/constants/statuses";

export const dishEntityAdapter = createEntityAdapter();

const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchDishesIfNotExist.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchDishesIfNotExist.fulfilled,
      (state, { payload }) => {
        dishEntityAdapter.addMany(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchDishesIfNotExist.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const dishReducer = dishSlice.reducer;
export const { selectById, selectIds } = dishEntityAdapter.getSelectors();
