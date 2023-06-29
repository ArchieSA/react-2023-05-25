import { selectReviewIds } from "@/redux/features/review/selectors";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "@/constants/statuses";

export const fetchReviewsByRestaurantIdIfNotExist = createAsyncThunk(
  "review/fetchReviewsByRestaurantIdIfNotExist",
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();
    const reviewIds = selectReviewIds(state);
    const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);

    if (
      !restaurantReviewIds ||
      restaurantReviewIds.every((reviewId) => reviewIds.includes(reviewId))
    ) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);
