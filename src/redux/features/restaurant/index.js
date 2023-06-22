import { normalizedRestaurants } from "@/mocks/normalized-fixtures";
import { normalized } from "@/utils/iterables";
import { createSlice } from "@reduxjs/toolkit";

const { entities, ids } = normalized(normalizedRestaurants, "id");

const initialState = {
  entities,
  ids,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
});

export const restaurantReducer = restaurantSlice.reducer;
