import { Restaurants } from "@/components/Restaurants/Restaurants";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "@/components/Loader/Load";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const { status } = useSelector((state) => state.restaurant);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantsIfNotExist());
  }, []);

  if (status === "pending") {
    return <Loader />;
  } else if (status === "failed") {
    return <span>Произошла ошибка...Попробуйте повторить попытку позже</span>;
  }
  return <Restaurants restaurantIds={restaurantIds} />;
};
