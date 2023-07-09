'use client';

import React from "react";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import {
  useCreateReviewMutation,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "@/redux/services/api";
import { revalidate } from '@/services'

export const NewReviewFormContainer = ({ review, restaurantId, onSaved }) => {
  const [createReview, { isLoading: isSaving }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isUpdating }] = useUpdateReviewMutation();
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSaving || isUpdating) {
    return <div>Saving...</div>;
  }

  const notify = (saved) => {
    // TO DO: возвращается 404
    revalidate(`review_${restaurantId}`)
    onSaved && onSaved(saved)
  }

  return (
    <NewReviewForm
      users={users}
      review={review}
      cancel={() => notify(false)}
      saveReview={(newReview) =>
        review
          ? updateReview({
              reviewId: review.id,
              newReview,
            }).then(() => notify(true))
          : createReview({
              restaurantId,
              newReview,
            }).then(() => notify(true))
      }
    />
  ); 
};
