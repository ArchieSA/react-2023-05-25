import { Restaurants } from "@/components/Restaurants/Restaurants";
import { selectRestaurantIds, selectRestaurantsFetchStatus } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from '@/components/Loader/Loader'
import { STATUSES } from "@/constants/statuses";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const fetchStatus = useSelector(selectRestaurantsFetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersIfNotExist());
    dispatch(fetchRestaurantsIfNotExist());
  }, []);

  return (
    fetchStatus !== STATUSES.finished
      ? <Loader status={fetchStatus} prefix="Restaurants" />
      : <Restaurants restaurantIds={restaurantIds} />
  )
};
