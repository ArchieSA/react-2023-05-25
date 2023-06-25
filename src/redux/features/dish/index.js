import { STATUSES } from "@/constants/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchDishesByRestaurantIfNotExist } from "@/redux/features/dish/thunks/fetchDishesByRestaurantIfNotExist";

const dishEntityAdapter = createEntityAdapter();

const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchDishesByRestaurantIfNotExist.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchDishesByRestaurantIfNotExist.fulfilled,
      (state, { payload }) => {
        dishEntityAdapter.addMany(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchDishesByRestaurantIfNotExist.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  }
});


export const {selectIds, selectById} = dishEntityAdapter.getSelectors();
export const dishReducer = dishSlice.reducer;
