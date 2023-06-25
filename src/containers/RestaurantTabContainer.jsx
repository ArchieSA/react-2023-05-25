import React from "react";
import { useSelector } from "react-redux";
import { Tab } from "@/components/Tab/Tab";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, activeRestaurantId, ...props }) => {
  const restaurant = useSelector((state) => {
    return selectRestaurant(state, restaurantId)
  });

  return <Tab title={restaurant.name} active={activeRestaurantId === restaurantId} {...props} />;
};
