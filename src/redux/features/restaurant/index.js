import { STATUSES } from "@/constants/statuses";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { createNewReview } from "@/redux/features/review/thunks/createNewReview";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const restaurantEntityAdapter = createEntityAdapter();

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState({
    status: STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantsIfNotExist.pending, (state) => {
        state.status = STATUSES.pending;
      })
      .addCase(fetchRestaurantsIfNotExist.fulfilled, (state, { payload }) => {
        restaurantEntityAdapter.setAll(state, payload);
        state.status = STATUSES.finished;
      })
      .addCase(fetchRestaurantsIfNotExist.rejected, (state, { payload }) => {
        state.status =
          payload === STATUSES.alreadyLoaded
            ? STATUSES.finished
            : STATUSES.failed;
      })
      .addCase(
        createNewReview.fulfilled,
        (state, { payload: { restaurantId, review } }) => {
          console.log("createNewReview");
          const restaurant = state.entities[restaurantId];
          restaurantEntityAdapter.setOne(state, {
            ...restaurant,
            reviews: [...restaurant.reviews, review.id],
          });
        }
      );
  },
});

export const { selectById, selectIds } = restaurantEntityAdapter.getSelectors();
export const restaurantReducer = restaurantSlice.reducer;
