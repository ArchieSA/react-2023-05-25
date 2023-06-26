import React, { useEffect } from "react";

import { Restaurants } from "@/components/Restaurants/Restaurants";
import { selectRestaurantIds, selectRestaurantLoader } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { fetchUsers } from "@/redux/features/user/thunks/fetchUsers";
import { useDispatch, useSelector } from "react-redux";
import { WithLoaderComponent } from "@/hocs/WithLoaderComponent";

const WithLoaderRestaurants = WithLoaderComponent(Restaurants)

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const isPending = useSelector(selectRestaurantLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchRestaurantsIfNotExist()),
      dispatch(fetchUsers()),
    ])
  }, []);

  return (
    <WithLoaderRestaurants 
      isPending={isPending} 
      restaurantIds={restaurantIds}
    />
  )
};
