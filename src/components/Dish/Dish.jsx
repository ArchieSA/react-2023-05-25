import React from "react";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;
  const listIngredients = ingredients.map((ing) => { // ?
    return(
      <li>{ing}</li>
    )
  })
  return (
    <li>
      <p>FoodName: {name}</p>
      <p>Price: {price}</p>
      <p>Ingredients:</p>
      <ul>
        {listIngredients}
      </ul>
      <hr/>
    </li>
  );
};
