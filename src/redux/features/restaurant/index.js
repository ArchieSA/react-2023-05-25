import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "@/mocks/normalized-fixtures";
import { entityToSlice } from '../../utils'

// { entities: { id: restaurant }, ids: []}
const INITIAL_STATE = entityToSlice(normalizedRestaurants);

const { reducer: restaurantReducer, actions: restaurantActions } = createSlice({
  name: "restaurant",
  initialState: INITIAL_STATE,
});

export { restaurantReducer, restaurantActions }

