"use client";

/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { RestaurantTabContainer } from "@/containers/RestaurantTabContainer";
import { RestaurantContainer } from "@/containers/RestaurantContainer";

export const Restaurants = ({ restaurantIds }) => {
  let [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer
            restaurantId={id}
            onClick={() => setActiveRestaurantId(id)}
          />
        ))}
      </div>
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </div>
  );
};
