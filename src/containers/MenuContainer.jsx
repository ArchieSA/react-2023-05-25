import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { useGetDishesQuery } from "@/redux/services/api";
import { DishContainer } from "./DishContainer";

export const MenuContainer = ({ restaurantId, className }) => {
  const { data, isFetching } = useGetDishesQuery(restaurantId)

  if (isFetching) {
    return <MenuSkeleton />;
  }

  if (!data?.length) {
    return null;
  }

  return (
    <div>
      {data.map(dish => (
        <DishContainer key={dish.id} dish={dish} />
      ))}
    </div>
  )
};
