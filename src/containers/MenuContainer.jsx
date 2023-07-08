import { Menu } from '@/components/Menu/Menu';
import { restaurantApi } from '@/services';

export async function MenuContainer({ restaurantId, className }) {
  const dishes = await restaurantApi.fetchDishesByRestaurantId(restaurantId);

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} className={className} />;
}
