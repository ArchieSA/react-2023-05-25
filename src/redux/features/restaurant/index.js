import { normalizedRestaurants } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
});

export const restaurantReducer = restaurantSlice.reducer;
