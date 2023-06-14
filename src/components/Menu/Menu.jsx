import { Dish } from "@/components/Dish/Dish";
import React from "react";
import styles from "./styles.module.scss"

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return <span>Empty Menu</span>;
  }

  return (
    <div className={styles.root}>
      <h3 className={styles['root-name']}>Menu</h3>
      <ul className={styles['root-list']}>
        {menu.map((dish, index) => (
          <li key={dish.id}>
            <Dish dish={dish} last={index === menu.length - 1}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
