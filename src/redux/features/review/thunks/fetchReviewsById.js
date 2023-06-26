import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectHasReviewByRestaurantId } from "../selectors";
import { STATUSES } from "@/constants/statuses";

export const fetchReviewsById = createAsyncThunk('review/fetchReviewsById', 
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();

    if(selectHasReviewByRestaurantId(state, restaurantId)) {
      return rejectWithValue(STATUSES.alreadyLoaded)
    }

    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const reviews = await response.json();

    return reviews.map(review => ({...review, restaurantId }));
  }
)