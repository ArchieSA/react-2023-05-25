"use client"

import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import React from "react";

export const NewReviewFormContainer = ({ review, users }) => {
  const createReview = () => {};
  const updateReview = (reviewId, newReview) => {console.log(reviewId);console.log(newReview)};

  return (
    <NewReviewForm
      users={users}
      review={review}
      saveReview={(newReview) =>
        review
          ? updateReview({
              reviewId: review.id,
              newReview,
            })
          : createReview({
              restaurantId,
              newReview,
            })
      }
    />
  );
};
