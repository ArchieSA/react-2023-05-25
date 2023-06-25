import { Restaurants } from "@/components/Restaurants/Restaurants";
import { STATUSES } from "@/constants/statuses";
import { selectRestaurantIds, selectRestaurantStatus } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantsIfNotExist());
  }, []);

  const status = useSelector((state) => selectRestaurantStatus(state));

  if(status === STATUSES.pending)
  {
    return <div>Restaurants pending</div>
  }

  return <Restaurants restaurantIds={restaurantIds} />;
};
