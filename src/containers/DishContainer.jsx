import { Dish } from "@/components/Dish/Dish";
import { cartActions } from "@/redux/features/cart";
import { selectDishAmount } from "@/redux/features/cart/selectors";
import { selectDish } from "@/redux/features/dishes/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ id, ...props }) => {
  const amount = useSelector((state) => selectDishAmount(state, id));
  const dish = useSelector((state) => selectDish(state, id));
  const dispatch = useDispatch();

  const decrement = () => dispatch(cartActions.decrement(id));
  const increment = () => dispatch(cartActions.increment(id));

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
