import React from "react";

import { selectReview } from "@/redux/features/reivew/selectors";
import { Review } from "@/components/Review/Review";
import { useSelector } from "react-redux";


export const ReviewContainer = ({reviewId, ...props}) => {
  const review = useSelector((state) => selectReview(state, reviewId));

  if (!review) {
    return null;
  }
  
  return <Review review={review} {...props} />
}