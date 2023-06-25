import { STATUSES } from "@/constants/statuses";
import { selectRestaurantReviewIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReview } from "@/redux/features/review/selectors";


export const fetchReviewByRestaurnatIfNotPresent = createAsyncThunk(
  "review/fetchReviewByRestaurnatIfNotPresent",
  async (restaurantId, { rejectWithValue, getState }) => {
    const state = getState();

    let needUpdate = true;
    const reviewIds = selectRestaurantReviewIds(state, restaurantId) || [];


    // if all reviews are present, we will end with needUpdate === false every time
    // if at least one is not there - we will end immediately and start the update
    for (const reviewId of reviewIds) {
      needUpdate = selectReview(state, reviewId) === undefined;

      if(needUpdate)
        break;

    }

    if (!needUpdate) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch(`http://localhost:3001/api/reviews/?restaurantId=`+restaurantId.toString());
    const reviews = await response.json();

    return reviews;
  }
);
