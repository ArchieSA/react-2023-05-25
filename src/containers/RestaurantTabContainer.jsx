import { Tab } from "@/components/Tab/Tab";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );

  return <Tab title={restaurant.name} {...props} />;
};
