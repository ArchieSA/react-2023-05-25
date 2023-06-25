import React from "react";
import { MenuContainer } from "@/containers/MenuContainer";
import { ReviewsContainer } from "@/containers/ReviewsContainer";
import styles from "./styles.module.scss";

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
