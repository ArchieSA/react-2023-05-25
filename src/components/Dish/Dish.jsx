/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

import styles from './styles.module.scss';
import { Button } from '@/components/Button/Button';
import { useCount } from '@/hooks/useCount';

export const Dish = ({ dish }) => {
  // const [count, setCount] = useState(0);
  const { num, increment, decrement } = useCount();

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div className={styles.root}>
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <Button
          onClick={decrement}
          disabled={num === 0}
          className={styles.action}
        >
          -
        </Button>
        {num}
        <Button
          onClick={increment}
          disabled={num === 5}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
      </div>
      {num > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
