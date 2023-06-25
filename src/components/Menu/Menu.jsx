import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";

export const Menu = ({ dishIds, className, renderSplash }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {renderSplash(dishIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} className={styles.dish} />
        )))}
      </div>
    </div>
  );
};
