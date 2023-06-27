import { Menu } from "@/components/Menu/Menu";
import { selectRestaurantDishIds } from "@/redux/features/restaurant/selectors";
import { useSelector } from "react-redux";
import { STATUSES } from "@/constants/statuses";
import { Loader } from "@/components/Loader/Loader";
import { selectDishFetchStatus } from "@/redux/features/dish/selectors";

export const MenuContainer = ({ restaurantId, className }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );
  const fetchStatus = useSelector(selectDishFetchStatus)

  if (!dishIds?.length) {
    return null;
  }

  return (
    fetchStatus !== STATUSES.finished
      ? <Loader status={fetchStatus} prefix="Dishes" />
      : <Menu dishIds={dishIds} className={className} />
  )
};
