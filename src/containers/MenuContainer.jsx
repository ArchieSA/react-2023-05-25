import { Menu } from "@/components/Menu/Menu";
import { selectDishIsLoading } from "@/redux/features/dish/selectors";
import { fetchDishesIfNotExist } from "@/redux/features/dish/thunks/fetchDishesifNotExist";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const status = useSelector((state) => selectDishIsLoading(state));

  if (status) {
    return <div>Menu is loading, wait please...</div>
  }

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} className={className} />;
};
