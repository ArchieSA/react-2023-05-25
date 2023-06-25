import { STATUSES } from "@/constants/statuses";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDish } from "@/redux/features/dish/selectors";


export const fetchDishesByRestaurantIfNotExist = createAsyncThunk(
  "dish/fetchDishesByRestaurantIfNotExist",
  async (restaurantId, { rejectWithValue, getState, ...props }) => {
    const state = getState();

    let needUpdate = true;
    const dishIds = selectRestaurantDishIds(state, restaurantId) || [];

    // if all dishes are present, we will end with needUpdate === false every time
    // if at least one is not there - we weill end immediately and start the update
    for (const dishId of dishIds) {
      let dish = selectDish(state, dishId);

      needUpdate = dish === undefined;

      if(needUpdate)
        break;

    }

     if (!needUpdate) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch(`http://localhost:3001/api/dishes/?restaurantId=`+restaurantId.toString());
    const dishes = await response.json();

    return dishes;
  }
);
