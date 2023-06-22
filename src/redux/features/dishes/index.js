import { normalizedDishes } from "@/mocks/normalized-fixtures";
import { normalized } from "@/utils/iterables";
import { createSlice } from "@reduxjs/toolkit";

const { entities, ids } = normalized(normalizedDishes, 'id');

const initialState = {
  entities,
  ids,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
});

export const dishReducer = dishSlice.reducer;