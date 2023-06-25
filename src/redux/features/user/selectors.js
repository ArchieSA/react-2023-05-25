import { createEntityAdapter } from "@reduxjs/toolkit";
import { MODULE_NAME } from './const'

export const userEntityAdapter = createEntityAdapter({ selectId: (entity) => entity.id });

// Adapter selectors
export const { selectById, selectIds } = userEntityAdapter.getSelectors();
// Main
export const selectUserModule = (state) => state[MODULE_NAME];
// System
export const selectStatus = (state) => selectUserModule(state).status;
export const selectError = (state) => selectUserModule(state).error;
export const selectUserIds = (state) => selectIds(selectUserModule(state));
// Custom
export const selectUser = (state, userId) =>
  selectById(selectUserModule(state), userId);
