import { Restaurant } from "@/components/Restaurant/Restaurant";
import { fetchRestaurant, fetchRestaurants } from "@/services";

export async function generateStaticParams() {
  const restaurants = await fetchRestaurants();

  return [{ restaurantId: restaurants[0].id }];
}

export default async function RestaurantPage({ params }) {
  const restaurant = await fetchRestaurant(params.restaurantId);

  return (
    <div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
}
