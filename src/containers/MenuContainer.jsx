import { Menu } from "@/components/Menu/Menu";
import { selectRestaurantMenu } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, ...props }) => {

  const menu = useSelector((state) => selectRestaurantMenu(state, restaurantId));

  return <Menu menu={menu} {...props}  />;
};
