import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { useCreateReviewMutation, useUpdateReviewMutation } from "@/redux/services/api";
import React from "react";

export const NewReviewFormContainer = ({ restaurantId, users, review, switchFormReview }) => {
  // компонент "понимает" для чего он если в него передается ревью. если есть то изменяет, если нет то создает
  const [createReview, { isLoading: isLoadingCreate }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isLoadingUpdate, isSuccess }] = useUpdateReviewMutation();

  if (isLoadingCreate || isLoadingUpdate) {
    return <div>Saving...</div>;
  }

  if (isSuccess) { //после успешного запроса заменит форму на комент
    switchFormReview(true)
  }

  return (
    <NewReviewForm
      review={review}
      users={users}
      saveReview={(newReview) =>
        createReview({
          restaurantId,
          newReview,
        })
      }
      updatReview={(newReview) => {
        updateReview({
          reviewId: review.id,
          newReview,
        });
      }
      }
    />
  );
};
