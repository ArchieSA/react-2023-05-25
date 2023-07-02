import { Menu } from "@/components/Menu/Menu";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { useGetDishesQuery } from "@/redux/services/api";
import React, { useEffect } from "react";

export const MenuContainer = ({ restaurantId, className }) => {

  const { data: dishes, isLoading, isFetching } = useGetDishesQuery(restaurantId);

  if (isLoading || isFetching) {
    return <MenuSkeleton />;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} className={className} />;
};
