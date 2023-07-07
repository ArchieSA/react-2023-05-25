import { Reviews } from '@/components/Reviews/Reviews';
import { useGetReviewsQuery, useGetUsersQuery } from '@/redux/services/api';

export const ReviewsContainer = ({ restaurantId, className }) => {
  const { data: reviews, isFetching, error } = useGetReviewsQuery(restaurantId);
  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useGetUsersQuery();

  if (isFetching || isUsersLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length || !users?.length || error || usersError) {
    return null;
  }

  return <Reviews reviews={reviews} className={className} />;
};
