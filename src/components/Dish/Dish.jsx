import { useState } from 'react'

export const Dish = ({ dish }) => {
  const [ dishCount, setDishCount ] = useState(0)

  if (!dish) {
    return null;
  }

  const { name, price, ingredients = [] } = dish;

  const changeCount = action => {
    if (dishCount > 0 && action === 'decrease') {
      setDishCount(dishCount - 1)
    } else if (dishCount < 5 && action === 'increase') {
      setDishCount(dishCount + 1)
    }
  }

  return (
    <div>
      <p><b>Dish: </b>{name}</p>
      <p><b>Price: </b>{price}</p>
      <p>
        <b>Заказ: </b>
        <button
          style={{ cursor: 'pointer' }}
          title="уменьшить количество"
          onClick={() => changeCount('decrease')}
        >
          -
        </button>
        <span>&nbsp; { dishCount } &nbsp;</span>
        <button
          style={{ cursor: 'pointer' }}
          title="увеличить количество"
          onClick={() => changeCount('increase')}
        >
          +
        </button>
      </p>
      {
        dishCount > 0 &&
        <p><b>Ingredients: </b>{ ingredients.join(', ') }</p>
      }
    </div>
  );
};
