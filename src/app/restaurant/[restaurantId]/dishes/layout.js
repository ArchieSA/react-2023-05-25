import { fetchRestaurant } from "@/services";
import { RestaurantHeader } from '@/components/RestaurantHeader/RestaurantHeader'

export default async function DishesLayout({ children, params }) {
  const { restaurantId } = params;
  const restaurant = await fetchRestaurant(restaurantId)

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
      <div>
        { children }
      </div>
    </div>
  )
}
