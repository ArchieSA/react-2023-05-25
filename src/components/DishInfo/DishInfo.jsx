import React, { Fragment } from "react";

const renderIngredient = (name, index) => (
  <Fragment key={name}>
    {index > 0 ? ", " : null}
    {name}
  </Fragment>
);

export const DishInfo = ({ name, price, ingredients, className }) => (
  <div className={className}>
    <h3>Состав:</h3>
    {ingredients && <ul>{ingredients.map(renderIngredient)}</ul>}
    <br />
    {price && <h3>Цена: {price}руб.</h3>}
  </div>
);
