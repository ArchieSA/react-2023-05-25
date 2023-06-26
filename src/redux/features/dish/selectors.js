import { STATUSES } from "@/constants/statuses";
import { selectById, selectIds } from "./index";

export const selectDishModule = (state) => state.dish;
export const selectDishIds = (state) => selectIds(selectDishModule(state));
export const selectDish = (state, dishId) => selectById(selectDishModule(state), dishId);
export const selectDishLoaded = (state) => selectDishModule(state).statuses === STATUSES.pending;
export const selectHasDishByRestaurantId = (state, id) => (
  Object.values(selectDishModule(state).entities).some(({ restaurantId }) => restaurantId === id)
)