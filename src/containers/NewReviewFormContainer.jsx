import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { STATUSES } from "@/constants/statuses";
import { useTriggerRequest } from "@/hooks/useTriggerRequest";
import { createNewReview } from "@/redux/features/review/thunks/createNewReview";
import { selectUsers } from "@/redux/features/user/selectors";
import { useCreateReviewMutation } from "@/redux/services/api";
import React from "react";
import { useSelector } from "react-redux";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const users = useSelector(selectUsers);
  const [createReview, { isLoading }] = useCreateReviewMutation();

  //   const [createReview, createReviewStatus] = useTriggerRequest(createNewReview);

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
