import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { useCreateReviewMutation, useGetUsersQuery } from "@/redux/services/api";
import React from "react";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery();
  const [createReview, { isLoading }] = useCreateReviewMutation();

  //   const [createReview, createReviewStatus] = useTriggerRequest(createNewReview);

  if (isLoading || isUsersLoading) {
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
