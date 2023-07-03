import { STATUSES } from "@/constants/statuses";
import { addRequestStatus } from "@/redux/features/request";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurantsIfNotExist = createAsyncThunk(
  "restaurant/fetchRestaurantsIfNotExist",
  async (_, { rejectWithValue, getState }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    const restaurants = await response.json();

    return restaurants;
  },
  {
    condition: (_, { getState }) => selectRestaurantIds(getState())?.length,
  }
);
