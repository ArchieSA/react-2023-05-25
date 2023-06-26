import { Loader } from "@/components/Loader/Load";
import { Review } from "@/components/Review/Review";
import { selectReview } from "@/redux/features/review/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({ reviewId, ...props }) => {
  const review = useSelector((state) => selectReview(state, reviewId));
  const { status } = useSelector((state) => state.review);

  if (status === "pending") {
    return <Loader />;
  } else if (status === "failed") {
    return <span>Произошла ошибка...Попробуйте повторить попытку позже</span>;
  }

  return <Review {...props} review={review} />;
};
