import { Reviews } from '@/components/Reviews/Reviews';
import { selectRestaurant } from '@/redux/features/restaurant/selectors';
import { useSelector } from 'react-redux';

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector(state =>
    selectRestaurant(state, restaurantId)
  );
  if (!restaurant?.reviews.length) {
    return <span>Empty reviews</span>;
  }
  return <Reviews reviews={restaurant?.reviews} {...props} />;
};
