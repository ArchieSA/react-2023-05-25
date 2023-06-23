import { Review } from "@/components/Review/Review";
import { selectReviews } from "@/redux/features/review/selector";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviews(state, reviewId));
  return <Review review={review} />;
};
