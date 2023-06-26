import { Loader } from "@/components/Loader/Load";
import { Menu } from "@/components/Menu/Menu";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const { status } = useSelector((state) => state.dish);
  if (status === "pending") {
    return <Loader />;
  } else if (status === "failed") {
    return <span>Произошла ошибка...Попробуйте повторить попытку позже</span>;
  }

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} className={className} />;
};
