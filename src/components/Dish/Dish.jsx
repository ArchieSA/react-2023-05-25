import React from 'react';
import { Ingredients } from '../Ingredients/Ingredients';

const initialState = { countDishes: 0 };

function reducer(state, { type }) {
  switch (type) {
    case 'increment':
      return {
        countDishes: state.countDishes + 1,
      };
    case 'decrement':
      return {
        countDishes: state.countDishes - 1,
      };
    default:
      return state;
  }
}

export const Dish = ({ dish }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <span>{`Кол-во блюд в заказе:${state.countDishes}`}</span>
      <div>
        <button
          disabled={state.countDishes === 0}
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>
        <button
          disabled={state.countDishes === 5}
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
      </div>
      {state.countDishes > 0 && ingredients.length > 0 ? (
        <Ingredients ingredients={ingredients} />
      ) : null}
    </div>
  );
};
