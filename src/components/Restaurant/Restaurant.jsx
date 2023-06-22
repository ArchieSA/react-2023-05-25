/* eslint-disable react/jsx-key */
import React from "react";

import { MenuContainer } from "@/containers/MenuContainer";
import { ReviewsContainer } from "@/containers/ReviewsContainer";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />
    </div>
  );
};
