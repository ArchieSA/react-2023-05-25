import React from "react";

import { Menu } from "@/components/Menu/Menu";
import { withLoaderComponent } from "@/hocs/WithLoaderComponent";
import { selectDishLoaded } from "@/redux/features/dish/selectors";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { useSelector } from "react-redux";

const MenuWithLoader = withLoaderComponent(Menu);

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const isPending = useSelector(selectDishLoaded);

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
