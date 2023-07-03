import React from "react";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { useCreateReviewMutation } from "@/redux/services/api";
import { useGetUsersQuery } from "@/redux/services/api";


export const NewReviewFormContainer = ({ restaurantId }) => {
  const { data: users } = useGetUsersQuery()
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
