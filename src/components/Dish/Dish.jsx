import React, { useReducer } from "react";

const ACTION_TYPE = {
  ADD_DISH: 'ADD_DISH',
  REMOVE_DISH: 'REMOVE_DISH',
}

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 5;

const reducer = (state, { type } = {}) => {
  switch(type) {
    case ACTION_TYPE.ADD_DISH:
      return state >= MAX_DISH_COUNT ? MAX_DISH_COUNT : state + 1;

    case ACTION_TYPE.REMOVE_DISH:
      return state <= MIN_DISH_COUNT ? MIN_DISH_COUNT : state - 1;

    default:
      return state;
  }
}

export const Dish = ({ dish }) => {
  const [count, dispatch] = useReducer(reducer, MIN_DISH_COUNT);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>

      {count !== MIN_DISH_COUNT && <p>{ingredients}</p>}

      <button onClick={() => dispatch({ type: ACTION_TYPE.REMOVE_DISH })}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: ACTION_TYPE.ADD_DISH })}>+</button>
    </div>
  );
};
