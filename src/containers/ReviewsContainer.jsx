import { Reviews } from "@/components/Reviews/Reviews";
import { fetchReviews, fetchUsers } from "@/services";

export const ReviewsContainer = async ({ restaurantId, className }) => {
  const reviews = await fetchReviews(restaurantId);
  const users = await fetchUsers()

  if (!reviews?.length || !users?.length) {
    return null;
  }

  return <Reviews reviews={reviews} users={users} className={className} />;
};
