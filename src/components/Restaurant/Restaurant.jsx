/* eslint-disable react/jsx-key */
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";
import React from "react";

import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} className={styles.menu} />
      <Reviews reviews={reviews} className={styles.reviews} />
    </div>
  );
};
