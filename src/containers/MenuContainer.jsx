import { Menu } from "@/components/Menu/Menu";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { useGetMenuQuery, useGetRestaurantsQuery } from "@/redux/services/api";
import React from "react";

export const MenuContainer = ({ restaurantId, className }) => {
  const {data: menu, isFetching} = useGetMenuQuery(restaurantId);

  if (isFetching) {
    return <MenuSkeleton />;
  }
  

  if (!menu?.length) {
    return null;
  }

  return <Menu menu={menu} className={className} />;
};
