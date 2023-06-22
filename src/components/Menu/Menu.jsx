import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";

/* eslint-disable react/jsx-key */
export const Menu = ({ dishesID, className }) => {
  
  if (!dishesID?.length) {
    return <span>Empty Menu</span>;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {dishesID.map((id) => (
          <DishContainer id={id} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
