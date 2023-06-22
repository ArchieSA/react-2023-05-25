/* eslint-disable react/jsx-key */
import React from "react";

import styles from "./styles.module.scss";
import { ReviewsContainer } from "@/containers/ReviewsContainer";
import { MenuContainer } from "@/containers/MenuContainer";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer dishIds={menu} className={styles.menu} />
      <ReviewsContainer reviewIds={reviews} className={styles.reviews} />
    </div>
  );
};
