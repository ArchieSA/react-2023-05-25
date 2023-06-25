import { STATUSES } from "@/constants/statuses";
import { selectUserIds } from "@/redux/features/user/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersIfNotExist = createAsyncThunk(
  "user/fetchUsersIfNotExist",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    if (selectUserIds(state)?.length) {
      return rejectWithValue(STATUSES.alreadyLoaded);
    }

    const response = await fetch("http://localhost:3001/api/users/");
    const users = await response.json();

    return users;
  }
);
