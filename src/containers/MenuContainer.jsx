import { Menu } from "@/components/Menu/Menu";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );
  return <Menu menu={restaurant.menu} {...props}/>;
};
