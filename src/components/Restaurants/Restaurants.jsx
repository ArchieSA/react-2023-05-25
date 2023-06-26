"use client";

import { Button } from "@/components/Button/Button";
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { RestaurantTabContainer } from "@/containers/RestaurantTabContainer";
import { RestaurantContainer } from "@/containers/RestaurantContainer";

export const Restaurants = ({ restaurantIds }) => {
  let [activeRestaurantId, setActiveRestaurantId] = useState(() => {
    return restaurantIds[0]
  });

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
      {activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId} />}
    </div>
  );
};
