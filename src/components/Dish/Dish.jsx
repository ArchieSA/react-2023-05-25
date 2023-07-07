/* eslint-disable react/jsx-key */

import { Button } from '@/components/Button/Button';
import { useIsMobile } from '@/contexts/device';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const isMobile = useIsMobile();

  const { name, price } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{name}</span>
      <span className={styles.price}>{price}р</span>
      {!isMobile && amount > 0 && (
        <span className={styles.sum}>{amount * price}р</span>
      )}
      <Button
        className={styles.decrementAction}
        viewVariant='secondary'
        disabled={amount === 0}
        onClick={decrement}
      >
        -
      </Button>
      {amount}
      <Button
        className={styles.incrementAction}
        viewVariant='secondary'
        disabled={amount === 5}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};
