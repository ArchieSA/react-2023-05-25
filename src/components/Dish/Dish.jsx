import React, { useState } from 'react';

import { Ingredients } from '@/components/Ingredients/Ingredients';

export const Dish = ({ dish }) => {
  let [dishesValue, setDishesValue] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            if (dishesValue > 0) {
              setDishesValue(dishesValue - 1);
            }
          }}
        >
          -
        </button>
        <p>{dishesValue}</p>
        <button
          onClick={() => {
            if (dishesValue < 5) {
              setDishesValue(dishesValue + 1);
            }
          }}
        >
          +
        </button>
      </div>

      <Ingredients ingredients={ingredients} dishesValue={dishesValue} />
    </div>
  );
};
