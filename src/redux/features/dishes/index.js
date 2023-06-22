import { normalizedDishes } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

const slice = createSlice({
  name: "dishes",
  initialState,
});

export const dishesReducer = slice.reducer;
