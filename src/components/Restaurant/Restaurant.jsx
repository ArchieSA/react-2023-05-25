/* eslint-disable react/jsx-key */
import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";
import React from "react";

import styles from "./styles.module.scss";
import { MenuContainer } from "@/containers/MenuContainer";
import { ReviewsContainer } from "@/containers/ReviewsContainer";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer restaurantId={id} className={styles.menu} />
      <ReviewsContainer restaurantId={id} className={styles.reviews} />
    </div>
  );
};
