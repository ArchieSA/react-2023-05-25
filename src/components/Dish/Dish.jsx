import React, { useEffect, useState } from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  let [dishAmount, setDishAmount] = useState(0);

  const updateDishAmount = (change) =>{
    if(!change || (dishAmount + change) > 5 || (dishAmount + change) < 0)
    return;

    setDishAmount(dishAmount + change);
  }

  const { name, price, ingredients } = dish;

  console.log("Dish Ingredients: ", ingredients);
  return (
    <>
    <div>
      <p>{name}</p>
      <p>{price}</p>
    <div>
      <button onClick={() => updateDishAmount(1)}>+</button>
      &nbsp;{dishAmount}&nbsp; 
      <button onClick={() => updateDishAmount(-1)}>-</button>
    </div>
    {
      dishAmount>0 ? <Ingredients ingredients={ingredients}/> : <></>
    }
    </div>
    </>
  );
};
