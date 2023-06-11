import { Ingredient } from '../Ingredient/Ingredient';

export const Ingredients = ({ ingredients }) => {
  if (!ingredients?.length) {
    return null;
  }

  return (
    <ul>
      <h4>Ingredients</h4>
      {ingredients.map((ingredient, index) => {
        return (
          <li key={index}>
            <Ingredient ingredient={ingredient} />
          </li>
        );
      })}
    </ul>
  );
};
