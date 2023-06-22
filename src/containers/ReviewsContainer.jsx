import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurant(state, restaurantId)
  );
  return <Reviews reviews={restaurant.reviews} {...props}/>;
};
