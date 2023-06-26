import React from "react";

import { Restaurant } from "@/components/Restaurant/Restaurant";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { useSelector } from "react-redux";


export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
