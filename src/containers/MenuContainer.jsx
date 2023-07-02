import React from "react";
import { Menu } from "@/components/Menu/Menu";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { useGetDishesQuery } from '@/redux/services/api'

export const MenuContainer = ({ restaurantId, className }) => {
  const { data, isFetching, error, isError } = useGetDishesQuery(restaurantId)

  if (isFetching) {
    return <MenuSkeleton />;
  }

  if (isError) {
    return <span>{new String(error)}</span>
  }

  if (!data?.length) {
    return null;
  }

  return <Menu dishes={data} className={className} />;
};
