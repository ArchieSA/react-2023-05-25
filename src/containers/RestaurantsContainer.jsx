import { Restaurants } from "@/components/Restaurants/Restaurants";
import { dishThunk } from "@/redux/features/dish/thunks/dishThunk";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { reviewThunk } from "@/redux/features/review/thunks/reviewThunk";
import { userThunk } from "@/redux/features/user/thunks/userThunk";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantsIfNotExist());
    // dispatch(dishThunk());
    // dispatch(reviewThunk());
    dispatch(userThunk());
  }, []);

  return <Restaurants restaurantIds={restaurantIds} />;
};
