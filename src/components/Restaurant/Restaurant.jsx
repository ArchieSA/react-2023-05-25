import React from "react";

import styles from "./styles.module.scss";
import { MenuContainer } from "@/containers/MenuContainer";
import { ReviewsContainer } from "@/containers/ReviewsContainer";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";

export const Restaurant = ({ restaurant, users }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer restaurantId={id} className={styles.menu} />
      <ReviewsContainer restaurantId={id} className={styles.reviews} users={users}/>
      <NewReviewFormContainer restaurantId={id} users={users}/>
    </div>
  );
};
