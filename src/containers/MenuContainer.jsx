import { Menu } from "@/components/Menu/Menu";
import { selectDishStatus } from "@/redux/features/dish/selectors";
import { dishThunk } from "@/redux/features/dish/thunks/dishThunk";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );
  const dispatch = useDispatch();

  const status = useSelector((state) => selectDishStatus(state));

  useEffect(() => {
    dispatch(dishThunk(restaurantId));
  }, [restaurantId])

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} className={className} status={status}/> 
};
