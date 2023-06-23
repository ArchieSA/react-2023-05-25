import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dish } from "@/components/Dish/Dish";
import { cartActions } from "@/redux/features/cart";
import { selectDishAmount } from "@/redux/features/cart/selectors";
import { selectDish } from "@/redux/features/dish/selectors";

export const DishContainer = ({ dishId, ...props }) => {
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dish = useSelector((state) => selectDish(state, dishId))
  const dispatch = useDispatch();

  const decrement = useCallback(() => dispatch(cartActions.decrement(dishId)), [dishId, dispatch]);
  const increment = useCallback(() => dispatch(cartActions.increment(dishId)), [dishId, dispatch]);

  if (!dishId) {
    return null;
  }

  return (
    <Dish
      {...props}
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
