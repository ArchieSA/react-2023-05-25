import React from "react";
import { Ingradients } from './components/Ingradients/Ingradients'

export const Dish = ({ dish, showDetail }) => {
  if (!dish) {
    return null;
  }

  const { name, price } = dish;
  return (
    <div>
      <p>
        {name}
        {showDetail && <Ingradients ingredients={dish.ingredients} />}
      </p>
      <p>{price}{price ? ' USD' : null}</p>
    </div>
  );
};
