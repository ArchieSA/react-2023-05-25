import React from 'react';
import { Ingredient } from '@/components/Ingredient/Ingredient';

export const Ingredients = ({ ingredients, dishesValue }) => {
  if (!ingredients || dishesValue === 0) {
    return null;
  }

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li>
          <Ingredient ingredient={ingredient} />
        </li>
      ))}
    </ul>
  );
};
