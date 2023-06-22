import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "@/mocks/normalized-fixtures";
import { normalized } from "@/utils/iterables";

const { entities, ids } = normalized(normalizedUsers, 'id');

const initialState = {
  entities,
  ids,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
})

export const userReducer = usersSlice.reducer;