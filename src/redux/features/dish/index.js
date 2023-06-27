import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDishesByRestaurant } from "./thunks/fetchDishesByRestaurant";

export const dishEntityAdapter = createEntityAdapter()

const dishSlice = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchDishesByRestaurant.pending, state => {
      state.status = STATUSES.pending;
    });
    builder.addCase(fetchDishesByRestaurant.fulfilled, (state, { payload }) => {
      dishEntityAdapter.upsertMany(state, payload);
      state.status = STATUSES.finished;
    });
    builder.addCase(fetchDishesByRestaurant.rejected, (state, { payload }) => {
      state.status = payload === STATUSES.alreadyLoaded
        ? STATUSES.finished
        : STATUSES.failed
    });
  },
})

export const { selectById, selectIds } = dishEntityAdapter.getSelectors();
export const dishReducer = dishSlice.reducer;
