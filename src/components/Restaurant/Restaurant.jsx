/* eslint-disable react/jsx-key */
import { Menu } from "@/components/Menu/Menu";
import React from "react";

import styles from "./styles.module.scss";
import { ReviewsContainer } from "@/containers/ReviewsContainer";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} className={styles.menu} />
      <ReviewsContainer restaurantId={restaurant.id} className={styles.reviews} />
    </div>
  );
};
