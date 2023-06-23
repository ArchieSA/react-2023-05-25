import {normalizedUsers } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedUsers.reduce((acc, users) => {
    acc[users.id] = users;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
});

export const userReducer = usersSlice.reducer;
