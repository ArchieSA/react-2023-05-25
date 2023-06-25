import { createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES } from "@/redux/const";
import { selectUserIds } from "@/redux/features/user/selectors";
import { MODULE_NAME } from '../const'
import { safeGet } from "../../../utils"

export const fetchUsersIfNotExist = createAsyncThunk(
  `${MODULE_NAME}/fetchUsersIfNotExist`,

  async (_, { rejectWithValue, getState }) => {
    const state = getState();

    if (selectUserIds(state)?.length) {
      return rejectWithValue({ status: STATUSES.alreadyLoaded });
    }

    return safeGet("http://localhost:3001/api/users/")
  }
)