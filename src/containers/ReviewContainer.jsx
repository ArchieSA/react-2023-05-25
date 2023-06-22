import { Review } from "@/components/Review/Review";
import { selectReview } from "@/redux/features/review/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const ReviewContainer = ({review, ...props}) => {

  const reviewIds = useSelector((state) =>
    selectReview(state, review)
  );

  return <Review review={reviewIds} {...props}/>;
};
