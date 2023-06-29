import { STATUSES } from "@/constants/statuses";

export const selectDishModule = (state) => state.dish;
export const selectDishIds = (state) => selectDishModule(state).ids;
export const selectDish = (state, dishId) =>
  selectDishModule(state).entities[dishId];

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).loadingStatus;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === STATUSES.pending;
