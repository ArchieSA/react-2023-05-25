import { createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { selectRestaurantIds } from "../selectors";
import { safeGet } from "../../../utils"
import { MODULE_NAME } from '../const'

export const fetchRestaurantsIfNotExist = createAsyncThunk(
  `${MODULE_NAME}/fetchRestaurantsIfNotExist`,

  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    if (selectRestaurantIds(state)?.length) {
      return rejectWithValue({ status: STATUSES.alreadyLoaded });
    }

    return safeGet("http://localhost:3001/api/restaurants/")
  }
);
