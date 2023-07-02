/* eslint-disable react/jsx-key */
import React from "react";

import styles from "./styles.module.scss";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { useGetUsersQuery } from "@/redux/services/api";

export const Restaurant = ({ restaurant }) => {
  const { data: users } = useGetUsersQuery()

  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurantId={id} className={styles.menu} />
      <Reviews restaurantId={id} className={styles.reviews} users={users} />
      <div className={styles.newReview}>
        <h3>Add review</h3>
      </div>
      <NewReviewFormContainer restaurantId={id} users={users} />
    </div>
  );
};
