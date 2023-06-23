import React from "react";
import { useSelector } from "react-redux";
import { Review } from "@/components/Review/Review";
import { selectReview } from "@/redux/features/review/selectors";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) =>
    selectReview(state, reviewId)
  );
  return <Review review={review} />;
};
