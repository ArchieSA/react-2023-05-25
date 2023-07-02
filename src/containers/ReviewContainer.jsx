import { Review } from "@/components/Review/Review";
import React from "react";

export const ReviewContainer = ({ review, ...props }) => {
  if (!review) {
    return null;
  }

  return <Review {...props} review={review} />;
};
