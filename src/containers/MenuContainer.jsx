import React, { useEffect } from "react";

import { Menu } from "@/components/Menu/Menu";
import { withLoaderComponent } from "@/hocs/WithLoaderComponent";
import { selectDishLoaded } from "@/redux/features/dish/selectors";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishById } from "@/redux/features/dish/thunks/fetchDishByid";

const MenuWithLoader = withLoaderComponent(Menu);

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  const isPending = useSelector(selectDishLoaded);

  useEffect(() => {
    dispatch(fetchDishById(restaurantId));
  }, [restaurantId, dispatch])

  if (!dishIds?.length) {
    return null;
  }

  return (
    <MenuWithLoader 
      isPending={isPending} 
      dishIds={dishIds} 
      className={className}
    />
  );
};
