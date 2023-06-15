/* eslint-disable react/jsx-key */

import { Button } from '@/components/Button/Button';
import { useCount } from '@/hooks/useCount';
import styles from './styles.module.scss';

export const Dish = ({ dish }) => {
  const { count, decrement, increment } = useCount(0);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.infoContainer}>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className={styles.countContainer}>
          <Button
            className={styles.button}
            onClick={decrement}
            disabled={count === 0}
          >
            -
          </Button>
          {count}
          <Button
            className={styles.button}
            onClick={increment}
            disabled={count === 5}
            viewVariant='secondary'
          >
            +
          </Button>
        </div>
      </div>
      {count > 0 && (
        <ul className={styles.list}>
          {ingredients.map(ingredient => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
