import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { STATUSES } from "@/constants/statuses";
import { selectDishIds } from "@/redux/features/dish/selectors";

export const fetchDishesByRestaurant = createAsyncThunk(
  'dishe/fetchDishesByRestaurant',
  async (restaurantId, { rejectWithValue, getState }) => {
    const state = getState();
    
    const currentRestaurant = selectRestaurant(state, restaurantId);
    if (!currentRestaurant){
      return rejectWithValue(STATUSES.failed);
    }

    const { menu } = currentRestaurant
    const loadedDishes = selectDishIds(state)
    const contionueFetch = menu.some(dishId => !loadedDishes.includes(dishId))
    if (!contionueFetch) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }


    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
    const dishes = await response.json();

    return dishes;
  }
);
