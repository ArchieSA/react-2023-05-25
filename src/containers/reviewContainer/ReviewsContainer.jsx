import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsId } from "@/redux/features/review/selector";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ reviews }) => {
  return <Reviews reviewIds={reviews} />;
};
