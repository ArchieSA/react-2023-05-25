import { Reviews } from "@/components/Reviews/Reviews";
import { selectRestaurantReviews } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId, ...props }) => {

  const reviews = useSelector((state) => selectRestaurantReviews(state, restaurantId));  

  return <Reviews reviews={reviews} {...props}  />;
};
