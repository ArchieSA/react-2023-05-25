import { Reviews } from '@/components/Reviews/Reviews';
import { restaurantApi } from '@/services';

export const ReviewsContainer = async ({ restaurantId, className }) => {
  const reviews = await restaurantApi.fetchReviewsByRestaurantId(restaurantId);

  if (!reviews.length) {
    return null;
  }
  return <Reviews reviews={reviews} className={className} />;
};
