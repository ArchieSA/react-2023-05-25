import { Restaurants } from "@/components/Restaurants/Restaurants";
import {
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { useGetRestaurantsQuery } from "@/redux/services/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetRestaurantsQuery(null);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <button onClick={refetch}>getRestaurants</button>
      {/* <Restaurants restaurantIds={restaurantIds} /> */}
    </div>
  );
};
