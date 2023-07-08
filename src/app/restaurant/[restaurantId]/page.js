import { Restaurant } from "@/components/Restaurant/Restaurant";
import { fetchRestaurant } from "@/services";

export default async function RestaurantPage({ params }) {
  const restaurant = await fetchRestaurant(params.restaurantId);

  return (
    <div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
}
