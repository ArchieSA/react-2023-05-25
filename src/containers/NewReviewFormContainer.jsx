"use client"

import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { useCreateReviewMutation, useUpdateReviewMutation } from "@/redux/services/api";
import React from "react";


export const NewReviewFormContainer = ({ restaurantId, review, users, setIsEditMode }) => {

  const [createReview, { isLoading: isLoadingCreate }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isLoadingUpdate, isSuccess }] = useUpdateReviewMutation();

  return (
    <NewReviewForm
      users={users}
      review={review}
      saveReview={(newReview) => {
        if (review) {
          updateReview({
            reviewId: review.id,
            newReview,
          });
          setIsEditMode(false);
        }
        else {
          createReview({
            restaurantId,
            newReview,
          })
        }
      }
      }
    />
  );
};
