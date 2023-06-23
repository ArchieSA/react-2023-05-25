"use client";

import React, { useState } from "react";
import { RestaurantTabContainer } from "@/containers/RestaurantTabContainer";
import { RestaurantContainer } from "@/containers/RestaurantContainer";
import styles from "./styles.module.scss";

export const Restaurants = ({ restaurantIds }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            restaurantId={id}
            onClick={() => setActiveRestaurantId(id)}
            className={styles.tab}
            activeId={activeRestaurantId}
          />
        ))}
      </div>
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </div>
  );
};
