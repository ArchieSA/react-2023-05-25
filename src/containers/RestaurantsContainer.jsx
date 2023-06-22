import { Restaurants } from "@/components/Restaurants/Restaurants";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  return <Restaurants restaurantIds={restaurantIds} />;
};
