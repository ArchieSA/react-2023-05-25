import { STATUSES } from "@/constants/statuses";
import { selectUserIds } from "@/redux/features/user/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersIfNotExist = createAsyncThunk(
  "user/fetchUsersIfNotExist",
  async (_, { getState, rejectWithValue }) => {
    if (selectUserIds(getState()).length) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/users/");

    return await response.json();
  }
);
