import React from "react";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { useCreateReviewMutation } from "@/redux/services/api";
import { useUsers } from "@/contexts/users"

export const NewReviewFormContainer = ({ restaurantId }) => {
  const users = useUsers();
  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <div>Saving...</div>;
  }

  return (
    <NewReviewForm
      users={users}
      saveReview={(newReview) =>
        createReview({
          restaurantId,
          newReview,
        })
      }
    />
  );
};
