import { Restaurant } from '@/components/Restaurant/Restaurant';
import { restaurantApi } from '@/services';

export async function generateStaticParams() {
  const restaurants = await restaurantApi.fetchRestaurants();

  return [{ restaurantId: restaurants[0].id }];
}

export default async function RestaurantPage({ params }) {
  const restaurant = await restaurantApi.fetchRestaurant(params.restaurantId);

  return (
    <div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
}
