import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";

import { useCreateReviewMutation, useGetUsersQuery } from "@/redux/services/api";
import React from "react";
import { useSelector } from "react-redux";

export const NewReviewFormContainer = ({ restaurantId }) => {

  const {data: users, isLoading: isUsersLoading} = useGetUsersQuery();
  const [createReview, { isLoading: isReviewSaving }] = useCreateReviewMutation();

  if (isUsersLoading) {
    return <div>Users loading...</div>;
  }

  if (isReviewSaving) {
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
