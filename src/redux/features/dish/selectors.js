import { selectById, selectIds } from './index';

export const selectDishModule = state => state.dish;
export const selectDishIds = state => selectIds(selectDishModule(state));
export const selectDish = (state, dishId) =>
  selectById(selectDishModule(state), dishId);
export const selectDishStatus = state => selectDishModule(state).status;