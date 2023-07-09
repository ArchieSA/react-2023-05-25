'use client';
import { NewReviewForm } from '@/components/NewReviewForm/NewReviewForm';
import {
  useCreateReviewMutation,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from '@/redux/services/api';

export const NewReviewFormContainer = ({ review, restaurantId }) => {
  const [createReview, { isLoading: isSaving }] = useCreateReviewMutation();
  const [updateReview, { isLoading: isUpdating }] = useUpdateReviewMutation();
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSaving || isUpdating) {
    return <div>Saving...</div>;
  }

  return (
    <NewReviewForm
      users={users}
      review={review}
      saveReview={newReview =>
        review
          ? updateReview({
              reviewId: review.id,
              newReview,
            })
          : createReview({
              restaurantId,
              newReview,
            })
      }
    />
  );
};
