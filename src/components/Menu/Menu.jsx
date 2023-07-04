import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";
import { Skeleton } from "@/components/Skeleton/Skeleton";

/* eslint-disable react/jsx-key */
export const Menu = ({ dishes, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {dishes.map((dish) => (
          <DishContainer dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
