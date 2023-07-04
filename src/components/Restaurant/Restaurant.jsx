import React from "react";

import styles from "./styles.module.scss";
import { MenuContainer } from "@/containers/MenuContainer";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer restaurantId={id} className={styles.menu} />
      {/* <ReviewsContainer restaurantId={id} className={styles.reviews} />
      <NewReviewFormContainer restaurantId={id} /> */}
    </div>
  );
};
