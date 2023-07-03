"use client";

import React, { useState } from "react";
import { RestaurantsTabContainer } from "@/containers/RestaurantsTabContainer";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import styles from "./styles.module.scss";

export const Restaurants = () => {
  const [activeRestaurant, setActiveRestaurant] = useState();

  return (
    <div className={styles.root}>
        <div className={styles.filters}>
          <RestaurantsTabContainer
            onClick={(restaurant) => setActiveRestaurant(restaurant)}
          />
        </div>
        {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
