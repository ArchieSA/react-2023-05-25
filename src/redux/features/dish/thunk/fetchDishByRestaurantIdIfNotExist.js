import { STATUSES } from "@/constants/statuses";
import { selectDishIds } from "@/redux/features/dish/selectors";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishByRestaurantIdIfNotExist = createAsyncThunk(
  "dish/fetchDishByRestaurantIdIfNotExist",
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurantMenu = selectRestaurantDishIds(state, restaurantId);
    const dishIds = selectDishIds(state);

    if (
      !restaurantMenu ||
      restaurantMenu.every((dishId) => dishIds.includes(dishId))
    ) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);
