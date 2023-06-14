import { useCount } from '@/hooks/useCount'
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@/components/Button/Button";

export const Dish = ({ dish, last = false }) => {
  const [count, changeCount] = useCount({ initialVaue: 0 });

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div className={classNames(
        styles.root,
        {
          [styles['root-last']]: last,
        },
      )}
    >
      <p>
        <b>Dish:  </b>
        <i>{name}</i>
      </p>
      <p>
        <b>Price:  </b>  
        <span>{price}</span>
      </p>
      <p className={styles['root-order']}>
        <Button
          onClick={() => changeCount(-1)}
          shape="circle"
          disabled={count === 0}
          className={styles['root-action']}
        >
          -
        </Button>
        {count}
        <Button
          onClick={() => changeCount(1)}
          shape="circle"
          disabled={count === 5}
          className={styles['root-action']}
        >
          +
        </Button>
      </p>
      {count > 0 && (
        <p>
          <b>Ingredients: </b>
          <span>{ingredients.join(', ')}</span>
        </p>
      )}
    </div>
  );
};
