/* eslint-disable react/jsx-key */
import { RestaurantCard } from '@/components/RestaurantCard/RestaurantCard';
import { fetchRestaurants } from '@/services';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Рестораны',
  description: 'Список ресторанов',
};

export default async function RestaurantsPage() {
  const restaurants = await fetchRestaurants();

  return (
    <div className={styles.root}>
      {restaurants.map(restaurant => (
        <RestaurantCard restaurant={restaurant} />
      ))}
    </div>
  );
}
