import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "@/mocks/normalized-fixtures";
import { entityToSlice } from '../../utils'

// { entities: { id: dish }, ids: []}
const INITIAL_STATE = entityToSlice(normalizedDishes);

const { reducer: dishReducer, actions: dishActions } = createSlice({
  name: "dish",
  initialState: INITIAL_STATE,
});

export { dishReducer, dishActions }

