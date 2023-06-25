import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Restaurants } from "@/components/Restaurants/Restaurants";
import {
  selectRestaurantIds,
  selectStatus,
  selectError,
} from "@/redux/features/restaurant/selectors";
import { isLoading } from "@/redux/utils";
import { Splash } from "@/components/Splash/Splash";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { fetchUsersIfNotExist } from "@/redux/features/user/thunks/fetchUsersIfNotExist";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector((state) => selectRestaurantIds(state));
  const status = useSelector((state) => selectStatus(state));
  const error = useSelector((state) => selectError(state));
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchRestaurantsIfNotExist());
    dispatch(fetchUsersIfNotExist());
  }, []);

  const renderSplash = useCallback(
    (children) => (
      <Splash
        isLoading={isLoading(status)}
        error={error}
        operationTitle="Загрузка ресторанов"
        showTitle
      >
        {children}
      </Splash>
    ),
    [error, status]
  );

  return <Restaurants restaurantIds={restaurantIds} renderSplash={renderSplash} />;
};
