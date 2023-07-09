import { RestaurantCard } from '@/components/RestaurantCard/RestaurantCard';
import { restaurantApi } from '@/services';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Рестораны',
  description: 'Список ресторанов',
};

export default async function RestaurantsPage() {
  const restaurants = await restaurantApi.fetchRestaurants();

  return (
    <div className={styles.root}>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
