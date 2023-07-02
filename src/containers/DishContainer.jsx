import { Dish } from "@/components/Dish/Dish";
import { cartActions } from "@/redux/features/cart";
import { selectDishAmount } from "@/redux/features/cart/selectors";
import { selectDish } from "@/redux/features/dish/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ dish, ...props }) => {
  const amount = useSelector((state) => selectDishAmount(state, dish.id));
  const dispatch = useDispatch();

  const decrement = () => dispatch(cartActions.decrement(dish.id));
  const increment = () => dispatch(cartActions.increment(dish.id));

  if (!dish) {
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
