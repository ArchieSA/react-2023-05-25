import { Dish } from '@/components/Dish/Dish';
import { dishActions } from '@/redux/features/dish';
import { selectDishList } from '@/redux/features/dish/selectors';

import { selectDishAmount } from '@/redux/features/dish/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DishContainer = ({ dishId, ...props }) => {
  const amount = useSelector((state) => selectDishAmount(state, dishId));

  const dispatch = useDispatch();

  const decrement = () => dispatch(dishActions.decrement(dishId));
  const increment = () => dispatch(dishActions.increment(dishId));

  dispatch(dishActions.setDishes(dishId));

  const dishList = useSelector(selectDishList);

  let dish = dishList[dishId];

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
