import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";
import { Skeleton } from "@/components/Skeleton/Skeleton";

export const Menu = ({ dishIds, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {dishIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
