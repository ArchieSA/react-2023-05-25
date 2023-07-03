import { STATUSES } from "@/constants/statuses";
import { selectDishIds } from "@/redux/features/dish/selectors";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishByRestaurantIdIfNotExist = createAsyncThunk(
  "dish/fetchDishByRestaurantIdIfNotExist",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantMenu = selectRestaurantDishIds(state, restaurantId);
      const dishIds = selectDishIds(state);

      return (
        restaurantMenu &&
        restaurantMenu.some((dishId) => !dishIds.includes(dishId))
      );
    },
  }
);
