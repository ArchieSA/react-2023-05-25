import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectDishAmount = (state, { dishId }) =>
  selectCart(state)[dishId] || 0;

// export const selectDishesAmount = createSelector(
//   [selectCart, selectDishAmount, selectRestaurantAmount],
//   (cart, amount) => {
//     return amount;
//   }
// );

// useSelector((state) => selectDishesAmount(state, { dishId, restaurantId }));
