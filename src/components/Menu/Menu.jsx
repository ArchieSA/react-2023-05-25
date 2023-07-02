import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { DishContainer } from "@/containers/DishContainer";
import { useGetDishesQuery } from "@/redux/services/api";
import { MenuSkeleton } from "./MenuSkeleton";

/* eslint-disable react/jsx-key */
export const Menu = ({ restaurantId, className }) => {
  const {data: menu, isLoading} = useGetDishesQuery(restaurantId)
    
  if (isLoading) {
    return <MenuSkeleton />;
  }

  if (!menu?.length) {
    return null;
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {menu.map((dish) => (
          <DishContainer dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
