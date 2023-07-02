"use client";

import React, { useState } from "react";
import { RestaurantsTabContainer } from "@/containers/RestaurantsTabContainer";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { UsersProvider } from "@/contexts/users"
import styles from "./styles.module.scss";

export const Restaurants = () => {
  const [activeRestaurant, setActiveRestaurant] = useState();

  return (
    <div className={styles.root}>
      <UsersProvider>
        <div className={styles.filters}>
          <RestaurantsTabContainer
            onClick={(restaurant) => setActiveRestaurant(restaurant)}
          />
        </div>
        {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
      </UsersProvider>
    </div>
  );
};
