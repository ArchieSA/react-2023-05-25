import { STATUSES } from '@/constants/statuses';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchDishByRestaurantId } from './thunks/fetchDishByRestaurantId';

const dishEntityAdapter = createEntityAdapter();

const dishSlice = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: builder => {
    builder.addCase(fetchDishByRestaurantId.pending, state => {
      state.status = STATUSES.pending;
    });
    builder.addCase(fetchDishByRestaurantId.fulfilled, (state, { payload }) => {
      dishEntityAdapter.setMany(state, payload);
      state.status = STATUSES.finished;
    });
    builder.addCase(fetchDishByRestaurantId.rejected, (state, { payload }) => {
      state.status =
        payload === STATUSES.alreadyLoaded
          ? STATUSES.finished
          : STATUSES.failed;
    });
  },
});
export const { selectById, selectIds } = dishEntityAdapter.getSelectors();
export const dishReducer = dishSlice.reducer;
