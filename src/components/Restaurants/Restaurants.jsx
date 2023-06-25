"use client";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { RestaurantTabContainer } from "@/containers/RestaurantTabContainer";
import { RestaurantContainer } from "@/containers/RestaurantContainer";

export const Restaurants = ({ restaurantIds, renderSplash }) => {
  let [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        {renderSplash(
          restaurantIds.map((id) => (
            <RestaurantTabContainer
              key={id}
              restaurantId={id}
              activeRestaurantId={activeRestaurantId}
              onClick={() => setActiveRestaurantId(id)}
            />
          ))
        )}
      </div>
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </div>
  );
};
