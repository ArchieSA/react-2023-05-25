import { STATUSES } from "@/constants/statuses";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectRestaurantDishIds } from "../../restaurant/selectors";
import { selectDish } from "../selectors";

export const fetchDishesIfNotExist = createAsyncThunk(
  "restaurant/fetchDishesIfNotExist",
  async (restaurantId, { rejectWithValue, getState }) => {
    const state = getState();

    const existedDishes = selectRestaurantDishIds(state, restaurantId);
    for (const dishId of existedDishes) {
      const dish = selectDish(state, dishId);

      if (dish === undefined) {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        const dishes = await response.json();

        return dishes;
      }

    }

    return rejectWithValue(STATUSES.alreadyLoaded);
  }
);
