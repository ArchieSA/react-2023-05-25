import { fetchDishes } from "@/services";
import Link from "next/link";

export default async function DishesPage({ params }) {
  const { restaurantId } = params
  const dishes = await fetchDishes(restaurantId)

  return (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Меню:</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          dishes.map(dish => <Link
            key={dish.id}
            href={`/restaurant/${restaurantId}/dishes/${dish.id}`}
            style={{ margin: '10px 0', fontStyle: 'italic' }}
          >
            { dish.name }
          </Link> )
        }
      </div>
    </div>
  );
}
