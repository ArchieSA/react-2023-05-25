import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Splash } from "@/components/Splash/Splash";
import { Reviews } from "@/components/Reviews/Reviews";
import { isLoading } from "@/redux/utils";
import { selectRestaurant } from "@/redux/features/restaurant/selectors";
import { selectStatus, selectError } from "@/redux/features/dish/selectors";
import { fetchReviewsByRestaurant } from "@/redux/features/review/thunks/fetchReviewsByRestaurant";

export const ReviewsContainer = ({ restaurantId, className }) => {
  const restaurant = useSelector((state) => selectRestaurant(state, restaurantId));
  const status = useSelector((state) => selectStatus(state));
  const error = useSelector((state) => selectError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    restaurant && dispatch(
      fetchReviewsByRestaurant({
        restaurantId
      })
    );
  }, [restaurant?.reviews, restaurantId]);

  const renderSplash = useCallback(
    (children) => (
      <Splash
        isLoading={isLoading(status)}
        error={error}
        operationTitle={`Загрузка ревью для ${restaurant?.name}`}
        showTitle
      >
        {children}
      </Splash>
    ),
    [error, restaurant?.name, status]
  );


  if (!restaurant || !restaurant.reviews?.length) {
    return null;
  }

  return <Reviews reviewIds={restaurant.reviews} className={className} renderSplash={renderSplash} />;
};
