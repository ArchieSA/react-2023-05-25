import { ReviewForm } from "@/components/ReviewForm/ReviewForm";
import { useCreateReviewMutation, useGetUsersQuery, useUpdateReviewMutation } from "@/redux/services/api";
import { useEffect, useRef } from "react";

export const ReviewFormContainer = ({ restaurantId, review, closeDialog, saveReview }) => {
  const { data: users } = useGetUsersQuery()

  const close = () => {
    closeDialog && closeDialog();
  }

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 2,
        top: 0, bottom: 0, left: 0, right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0, top: 0,
          width: "100%", height: "100%",
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
        onClick={close}
      />
      <ReviewForm
        users={users}
        review={review}
        saveReview={saveReview}
      />
    </div>
  );
};
