import { Restaurant } from "@/components/Restaurant/Restaurant";
import { fetchDishesIfNotExist } from "@/redux/features/dish/thunks/fetchDishesifNotExist";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { fetchReviewsIfNotExist } from "@/redux/features/review/thunks/fetchReviewsifNotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishesIfNotExist(restaurantId));
    dispatch(fetchReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
