import { Menu } from "@/components/Menu/Menu";
import { STATUSES } from "@/constants/statuses";
import { selectDishStatus } from "@/redux/features/dish/selectors";
import { fetchDishesByRestaurantIfNotExist } from "@/redux/features/dish/thunks/fetchDishesByRestaurantIfNotExist";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const status = useSelector((state) => selectDishStatus(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishesByRestaurantIfNotExist(restaurantId));
  }, [restaurantId]);


  if (!dishIds?.length) {
    return null;
  }

  if(status === STATUSES.pending)
  {
    return <div>Menu pending</div>
  }

  return <Menu dishIds={dishIds} className={className} />;
};
