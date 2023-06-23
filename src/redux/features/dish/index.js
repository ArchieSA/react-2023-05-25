import { normalizedDishes } from "@/mocks/normalized-fixtures";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
});

export const dishReducer = dishSlice.reducer;
