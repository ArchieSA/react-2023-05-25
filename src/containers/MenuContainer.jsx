import { Menu } from "@/components/Menu/Menu";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { STATUSES } from "@/constants/statuses";
import { useGetDishesQuery } from "@/redux/services/api";
import React from "react";


export const MenuContainer = ({ restaurantId, className }) => {
  const { data: dishes, isLoading } = useGetDishesQuery(restaurantId);

  if (isLoading === STATUSES.pending) {
    return <MenuSkeleton />;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} className={className} />;
};
