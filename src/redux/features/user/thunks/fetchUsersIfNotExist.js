import { STATUSES } from "@/constants/statuses";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";

export const fetchUsersIfNotExist = createAsyncThunk(
  "restaurant/fetchUsersIfNotExist",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    if (selectUserIds(state)?.length) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/users/");
    const restaurants = await response.json();

    return restaurants;
  }
);
