/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useDishCount } from "@/hooks/useDishCount";

export const Dish = ({ dish }) => {
  const [count, decreaseCount, increaseCount] = useDishCount(0);

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
          onClick={() => decreaseCount()}
          disabled={count === 0}
          className={styles.action}
        >
          -
        </Button>
        {count}
        <Button
          onClick={() => increaseCount()}
          disabled={count === 5}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
      </div>
      {count > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
