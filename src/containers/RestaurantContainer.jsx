import { Restaurant } from "@/components/Restaurant/Restaurant";
import { fetchDishesByRestaurant } from "@/redux/features/dish/thunks/fetchDishesByRestaurant";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { fetchReviewsByRestaurant } from "@/redux/features/review/thunk/fetchReviewsByRestaurant";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishesByRestaurant(restaurantId));
    dispatch(fetchReviewsByRestaurant(restaurantId));
  }, [restaurantId])

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
