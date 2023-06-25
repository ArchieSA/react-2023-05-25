import { createEntityAdapter } from "@reduxjs/toolkit";
import { MODULE_NAME } from './const'

export const dishEntityAdapter = createEntityAdapter({
  selectId: (entity) => entity.id,
});

// Adapter selectors
export const { selectById, selectIds } = dishEntityAdapter.getSelectors();
// Main
export const selectDishModule = (state) => state[MODULE_NAME];
// System
export const selectStatus = (state) => selectDishModule(state).status
export const selectError = (state) => selectDishModule(state).error
export const selectDishIds = (state) =>
  selectIds(selectDishModule(state));
// Custom
export const selectDish = (state, dishId) =>
  selectById(selectDishModule(state), dishId);
