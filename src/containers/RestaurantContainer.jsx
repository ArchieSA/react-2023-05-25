import React, { useEffect } from "react";

import { Restaurant } from "@/components/Restaurant/Restaurant";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishById } from "@/redux/features/dish/thunks/fetchDishByid";
import { fetchReviewsById } from "@/redux/features/review/thunks/fetchReviewsById";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishById(restaurantId));
    dispatch(fetchReviewsById(restaurantId));
  }, [restaurantId, dispatch]);

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
