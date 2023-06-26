import { STATUSES } from "@/constants/statuses";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectReview } from "../selectors";

export const fetchReviewsIfNotExist = createAsyncThunk(
  "restaurant/fetchReviewsIfNotExist",
  async (restaurantId, { rejectWithValue, getState }) => {
    const state = getState();

    const existedReviews = selectRestaurantReviewIds(state, restaurantId);
    for (const reviewId of existedReviews) {
      const review = selectReview(state, reviewId);

      if (review === undefined) {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        const reviews = await response.json();

        return reviews;
      }

    }

    return rejectWithValue(STATUSES.alreadyLoaded);
  }
);
