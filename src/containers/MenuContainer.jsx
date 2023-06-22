import React from "react";
import { useSelector } from "react-redux";

import { Menu } from "@/components/Menu/Menu";
import { selectMenuIds } from "@/redux/features/restaurant/selectors";


export const MenuContainer = ({ restaurantId }) => {
  const menuIds = useSelector((state) => selectMenuIds(state, restaurantId));

  return <Menu menuIds={menuIds} />;
};
