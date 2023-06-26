import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDishRestaurant } from "./thunk/fetchDishRestaurant";

export const DishEntityAdapter = createEntityAdapter()

const dishSlice = createSlice({
  name: "dish",
  initialState: DishEntityAdapter.getInitialState({
    status:STATUSES.idle
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchDishRestaurant.pending, (state) => {
      state.status = STATUSES.pending
    });
    builder.addCase(fetchDishRestaurant.fulfilled, (state, {payload}) => {
      DishEntityAdapter.addMany(state, payload)
      state.status = STATUSES.finished
    })
  }
});
export const { selectById, selectIds } = DishEntityAdapter.getSelectors();
export const dishReducer = dishSlice.reducer;
