/* eslint-disable react/jsx-key */
import { Reviews } from "@/components/Reviews/Reviews";
import React from "react";
import { Menu } from "../Menu/Menu";

import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu dishesID={menu} className={styles.menu} />
      <Reviews reviewsID={reviews} className={styles.reviews} />
    </div>
  );
};
