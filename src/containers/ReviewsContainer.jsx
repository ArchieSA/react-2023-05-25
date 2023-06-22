import React from "react";
import { useSelector } from "react-redux";

import { selectReviewsIdsByRestaraunt } from "@/redux/features/restaurant/selectors";
import { Reviews } from "@/components/Reviews/Reviews";


export const ReviewsContainer = ({ restaurantId }) => {
  const rewiewsIds = useSelector((state) => selectReviewsIdsByRestaraunt(state, restaurantId));

  return <Reviews rewiewsIds={rewiewsIds} />;
};