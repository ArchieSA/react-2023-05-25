import React from "react";
import { useState } from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  let [dishCount, setDichCount] = useState(0);

  const { name, price, ingredients } = dish;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      
      <button onClick={() => {
        if (dishCount > 0) {
          setDichCount(dishCount - 1)
        }
      }}>-</button>
      <span>{dishCount}</span>
      <button onClick={() => {
        if (dishCount < 5) {
          setDichCount(dishCount + 1)
        }
      }}>+</button>
      { dishCount > 0 &&  <Ingredients ingredients={ingredients} />}
    </div>
  );
};
