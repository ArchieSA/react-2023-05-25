"use client";

import { Button } from "@/components/Button/Button";
/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { RestaurantsTabContainer } from "@/containers/RestaurantsTabContainer";
import { RestaurantContainer } from "@/containers/RestaurantContainer";
import { Restaurant } from "@/components/Restaurant/Restaurant";

export const Restaurants = () => {
  let [activeRestaurant, setActiveRestaurant] = useState();

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
