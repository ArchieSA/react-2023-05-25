import { normalizedDishes } from "@/mocks/normalized-fixtures";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;
    
        return acc;
      }, {}),
      ids: normalizedDishes.map(({ id }) => id),
}
const menuSlice = createSlice({
    name: 'menu',
    initialState,
})

export const menuReducer = menuSlice.reducer
export const menuAction= menuSlice.actions