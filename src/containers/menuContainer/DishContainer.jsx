import { Dish } from "@/components/Dish/Dish";
import { cartActions } from "@/redux/features/cart";
import { selectDishAmount } from "@/redux/features/cart/selectors";
import { selectMenu } from "@/redux/features/menu/selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ dishId, ...props }) => {
  const dishes = useSelector((state) => selectMenu(state, dishId));
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dispatch = useDispatch();
  if (!dishId) {
    return null;
  }

  const decrement = () => dispatch(cartActions.decrement(dishId));
  const increment = () => dispatch(cartActions.increment(dishId));

  return (
    <Dish
      {...props}
      dish={dishes}
      amount={amount}
      increment={increment}
      decrement={decrement}
    />
  );
};
