
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviewsByRestaurant = createAsyncThunk(
  "review/fetchReviewsByRestaurant",
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const reviews = await response.json();

    return reviews;
  }
);