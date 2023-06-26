import { Restaurant } from "@/components/Restaurant/Restaurant";
import { fetchDishRestaurant } from "@/redux/features/dish/thunk/fetchDishRestaurant";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishRestaurant(restaurantId));
  }, [restaurantId]);

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
