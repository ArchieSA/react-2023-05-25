import React from "react";
import { useSelector } from "react-redux";
import { Tab } from "@/components/Tab/Tab";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, activeId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );

  return <Tab title={restaurant.name} active={activeId === restaurantId} {...props} />;
};
