import { Review } from "@/components/Review/Review";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useCreateReviewMutation, useGetReviewsQuery, useUpdateReviewMutation } from "@/redux/services/api";
import { useEffect, useState } from "react";
import { ReviewFormContainer } from "@/containers/ReviewFormContainer";

export const Reviews = ({ restaurantId, className }) => {
  const [upsertDialogParams, setUpsertDialogParams] = useState({
    isOpen: false,
    review: null,
  })

  const { data: reviews = [], isFetching: isReviewsFetching } = useGetReviewsQuery(restaurantId)
  const [createReview, { isLoading: isReviewCreating }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isReviewUpdating }] = useUpdateReviewMutation();

  useEffect(
    () => {
      if (!isReviewCreating && !isReviewUpdating && upsertDialogParams.isOpen) {
        setUpsertDialogParams({
          isOpen: false,
          review: null,
        });
      }
    },
    [isReviewCreating, isReviewUpdating],
  )

  if (isReviewsFetching) {
    return <div>Loading...</div>;
  }

  if (isReviewCreating || isReviewUpdating) {
    return <div>Saving...</div>;
  }

  if (!reviews.length) {
    return null;
  }

  const addNewReview = () => {
    setUpsertDialogParams({
      isOpen: true,
      review: null,
    });
  }

  const editReview = review => {
    setUpsertDialogParams({
      isOpen: true,
      review,
    });
  }

  const closeDialog = () => {
    setUpsertDialogParams({
      isOpen: false,
      review: null,
    });
  }

  const saveReview = newReview => {
    if (newReview.id) {
      updateReview({ reviewId: newReview.id, newReview });
    } else {
      createReview({ restaurantId, newReview });
    }
  }

  return (
    <div className={classNames(styles.root, className)}>
      <h3>Reviews</h3>
      <button
        className={styles.createButton}
        onClick={addNewReview}
      >
        Add new review
      </button>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            editReview={editReview}
            className={styles.review}
          />
        ))}
      </div>

      { upsertDialogParams.isOpen
        &&
        <ReviewFormContainer
          restaurantId={restaurantId}
          review={upsertDialogParams.review}
          closeDialog={closeDialog}
          saveReview={saveReview}
        />}
    </div>
  );
};
