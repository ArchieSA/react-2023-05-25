import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { fetchDishesByRestaurantIncremental } from "./thunks/fetchDishesByRestaurantIncremental";
import { dishEntityAdapter } from './selectors'
import { MODULE_NAME } from "./const";
import {
  initialStateFactory,
  initializingReducer,
  errorReducer,
} from "../../utils";


export const { reducer: dishReducer, actions: dishActions } = createSlice({
  name: MODULE_NAME,
  initialState: initialStateFactory(dishEntityAdapter),

  extraReducers: (builder) => builder
    .addCase(fetchDishesByRestaurantIncremental.pending, initializingReducer)

    .addCase(fetchDishesByRestaurantIncremental.fulfilled, (state, { payload }) => {
      dishEntityAdapter.setMany(state, payload);
      state.status = STATUSES.finished;
      state.ts = new Date().getTime();
    })

    .addCase(fetchDishesByRestaurantIncremental.rejected, errorReducer),
});


