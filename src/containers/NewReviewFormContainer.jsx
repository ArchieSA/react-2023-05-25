"use client"

import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { useCreateReviewMutation, useUpdateReviewMutation } from "@/redux/services/api";
import React from "react";


export const NewReviewFormContainer = ({ restaurantId, review, users }) => {

  const [createReview, { isLoading: isLoadingCreate }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isLoadingUpdate }] = useUpdateReviewMutation();

  if (isLoadingCreate || isLoadingUpdate) {
    return <div>Saving...</div>;
  }

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
