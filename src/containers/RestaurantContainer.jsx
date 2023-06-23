import React from "react";
import { useSelector } from "react-redux";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );
  return <Restaurant restaurant={restaurant} />;
};
