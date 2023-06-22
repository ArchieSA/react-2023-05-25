import React from "react";

import { ReviewContainer } from "./ReviewContainer";

export const ReviewsContainer = ({ reviewIds, ...props }) => {
  return (
    <>
      {
        reviewIds.map((reviewId) => 
          <ReviewContainer key={reviewId} reviewId={reviewId} {...props} />
        )
      }
    </>
  )
}