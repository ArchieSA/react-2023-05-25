import { Loader } from '@/components/Loader/Loader';
import { Menu } from '@/components/Menu/Menu';
import { STATUSES } from '@/constants/statuses';
import { selectDishStatus } from '@/redux/features/dish/selectors';
import { fetchDishByRestaurantId } from '@/redux/features/dish/thunks/fetchDishByRestaurantId';
import { selectRestaurantDishIds } from '@/redux/features/restaurant/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MenuContainer = ({ restaurantId, className }) => {
  const dispatch = useDispatch();

  const dishIds = useSelector(state =>
    selectRestaurantDishIds(state, restaurantId)
  );
  const status = useSelector(selectDishStatus);

  useEffect(() => {
    dispatch(fetchDishByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!dishIds?.length) {
    return null;
  }

  return status === STATUSES.pending ? (
    <Loader />
  ) : (
    <Menu dishIds={dishIds} className={className} />
  );
};
