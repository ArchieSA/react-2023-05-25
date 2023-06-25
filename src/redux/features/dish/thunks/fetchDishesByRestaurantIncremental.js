import { createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { selectDishIds } from "../selectors";
import { MODULE_NAME } from '../const'
import { safeGet } from "../../../utils"

export const fetchDishesByRestaurantIncremental = createAsyncThunk(
  `${MODULE_NAME}/fetchDishesByRestaurantIncremental`,

  async ({ restaurantId, testDishId }, { rejectWithValue, getState }) => {
    const state = getState();    

    const ids = selectDishIds(state)

    if (ids?.length && testDishId && ids.some(id => id === testDishId)) {
      return rejectWithValue({ status: STATUSES.alreadyLoaded });
    }

    return safeGet("http://localhost:3001/api/dishes/", { restaurantId })
  }
);
