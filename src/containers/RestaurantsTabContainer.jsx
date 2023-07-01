import { Tab } from "@/components/Tab/Tab";
import { useGetRestaurantsQuery } from "@/redux/services/api";

export const RestaurantsTabContainer = ({ onClick }) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {restaurants.map((restaurant) => (
        <Tab key={restaurant.id} title={restaurant.name} onClick={() => onClick(restaurant)} />
      ))}
    </div>
  );
};
