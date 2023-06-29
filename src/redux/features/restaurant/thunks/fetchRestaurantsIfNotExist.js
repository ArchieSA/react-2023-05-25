import { STATUSES } from "@/constants/statuses";
import { addRequestStatus } from "@/redux/features/request";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurantsIfNotExist = createAsyncThunk(
  "restaurant/fetchRestaurantsIfNotExist",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    if (selectRestaurantIds(state)?.length) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/restaurants/");
    const restaurants = await response.json();

    return restaurants;
  }
);
