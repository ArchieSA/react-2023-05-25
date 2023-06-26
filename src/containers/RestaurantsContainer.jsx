import { Loader } from '@/components/Loader/Loader';
import { Restaurants } from '@/components/Restaurants/Restaurants';
import { STATUSES } from '@/constants/statuses';
import {
  selectRestaurantIds,
  selectRestaurantStatus,
} from '@/redux/features/restaurant/selectors';
import { fetchRestaurantsIfNotExist } from '@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const dispatch = useDispatch();
  const status = useSelector(selectRestaurantStatus);

  useEffect(() => {
    dispatch(fetchRestaurantsIfNotExist());
  }, []);

  return status === STATUSES.pending ? (
    <Loader />
  ) : (
    <Restaurants restaurantIds={restaurantIds} />
  );
};
