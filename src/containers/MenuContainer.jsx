import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "@/components/Menu/Menu";
import { Splash } from "@/components/Splash/Splash";
import { isLoading } from "@/redux/utils";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { selectStatus, selectError } from "@/redux/features/dish/selectors";
import { fetchDishesByRestaurantIncremental } from "@/redux/features/dish/thunks/fetchDishesByRestaurantIncremental";

export const MenuContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) => selectRestaurant(state, restaurantId));
  const status = useSelector((state) => selectStatus(state));
  const error = useSelector((state) => selectError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    restaurant && dispatch(
      fetchDishesByRestaurantIncremental({
        restaurantId,
        menu: restaurant?.menu,
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurant]);

  const renderSplash = useCallback(
    (children) => (
      <Splash
        isLoading={isLoading(status)}
        error={error}
        operationTitle={`Загрузка ресторана ${restaurant?.name}`}
        showTitle
      >
        {children}
      </Splash>
    ),
    [error, restaurant?.name, status]
  );

  if (!restaurant || !restaurant.menu?.length) {
    return null;
  }

  return <Menu dishIds={restaurant.menu} className={className} renderSplash={renderSplash} />;
};
