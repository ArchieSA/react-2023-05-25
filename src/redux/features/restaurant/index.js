import { STATUSES } from "@/constants/statuses";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const restaurantEntityAdapter = createEntityAdapter();

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsIfNotExist.pending, (state) => {
      state.status = STATUSES.pending;
    });
    builder.addCase(
      fetchRestaurantsIfNotExist.fulfilled,
      (state, { payload }) => {
        restaurantEntityAdapter.setAll(state, payload);
        state.status = STATUSES.finished;
      }
    );
    builder.addCase(
      fetchRestaurantsIfNotExist.rejected,
      (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      }
    );
  },
});

export const { selectById, selectIds } = restaurantEntityAdapter.getSelectors();
export const restaurantReducer = restaurantSlice.reducer;
