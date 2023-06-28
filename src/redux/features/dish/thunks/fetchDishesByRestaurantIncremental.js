import { createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { selectDishIds } from "../selectors";
import { MODULE_NAME } from '../const'
import { safeGet } from "../../../utils"

export const fetchDishesByRestaurantIncremental = createAsyncThunk(
  `${MODULE_NAME}/fetchDishesByRestaurantIncremental`,

  async ({ restaurantId, menu }, { rejectWithValue, getState }) => {
    const state = getState();    

    const ids = new Set(selectDishIds(state))
    

    if (menu?.length && menu.every(id => ids.has(id))) {
      return rejectWithValue({ status: STATUSES.alreadyLoaded });
    }

    return safeGet("http://localhost:3001/api/dishes/", { restaurantId })
  }
);
