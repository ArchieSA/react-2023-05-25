import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectHasDishByRestaurantId } from "../selectors";
import { STATUSES } from "@/constants/statuses";

export const fetchDishById = createAsyncThunk('dish/fetchDishById', 
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();

    if(selectHasDishByRestaurantId(state, restaurantId)) {
      return rejectWithValue(STATUSES.alreadyLoaded)
    }

    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    const dishes = await response.json();

    return dishes.map(dish => ({...dish, restaurantId}));
  }
)