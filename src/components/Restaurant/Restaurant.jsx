/* eslint-disable react/jsx-key */

import React from "react";

import styles from "./styles.module.scss";
import { ReviewsContainer } from "@/containers/reviewContainer/ReviewsContainer";
import { MenuContainer } from "@/containers/menuContainer/MenuContainer";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer dishIds={menu} className={styles.menu} />
      <ReviewsContainer reviews={reviews} />
    </div>
  );
};
