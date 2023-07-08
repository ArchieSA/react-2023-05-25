import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import classNames from "classnames";
import { useIsMobile } from "@/contexts/device";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const isMobile = useIsMobile();

  const { name, price, ingredients } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.title}>
        <span><b>Блюдо: </b>{name}</span>
        <div className={styles.ingredients}>
          <b>Состав: </b>{ ingredients.join(', ') }
        </div>
      </div>
      <span className={styles.price}>{price}р</span>
      {!isMobile && amount > 0 && (
        <span className={styles.sum}>{amount * price}р</span>
      )}
      <Button
        className={styles.decrementAction}
        viewVariant="secondary"
        disabled={amount === 0}
        onClick={decrement}
      >
        -
      </Button>
      {amount}
      <Button
        className={styles.incrementAction}
        viewVariant="secondary"
        disabled={amount === 5}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};
