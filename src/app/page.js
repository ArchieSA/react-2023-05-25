import { Restaurant } from '@/components/Restaurant';
import { restaurants } from '@/mocks';

export default function Home() {
  return (
    <ul>
      {restaurants.map(restaurant => {
        return (
          <li key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  );
}
