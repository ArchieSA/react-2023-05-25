import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { fetchRestaurantsIfNotExist } from "./thunks/fetchRestaurantsIfNotExist";
import { restaurantEntityAdapter } from './selectors'
import { MODULE_NAME } from "./const";
import {
  initialStateFactory,
  initializingReducer,
  errorReducer,
} from "../../utils";


export const { reducer: restaurantReducer, actions: restaurantActions } =
  createSlice({
    name: MODULE_NAME,
    initialState: initialStateFactory(restaurantEntityAdapter),

    extraReducers: (builder) => {
      builder.addCase(fetchRestaurantsIfNotExist.pending, initializingReducer);

      builder.addCase(
        fetchRestaurantsIfNotExist.fulfilled,
        (state, { payload }) => {
          restaurantEntityAdapter.setAll(state, payload);
          state.status = STATUSES.finished;
          state.ts = new Date().getTime();
        }
      );

      builder.addCase(fetchRestaurantsIfNotExist.rejected, errorReducer);
    },
  });
