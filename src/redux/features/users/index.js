import { normalizedUsers } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

const slice = createSlice({
  name: "users",
  initialState,
});

export const usersReducer = slice.reducer;
