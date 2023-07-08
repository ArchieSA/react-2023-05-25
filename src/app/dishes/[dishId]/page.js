import { restaurantApi } from '@/services';

export async function generateStaticParams() {
  const dishes = await restaurantApi.fetchDishes();
  return [
    {
      dishId: dishes[0].id,
    },
  ];
}

export default async function DishPage({ params }) {
  const dishes = await restaurantApi.fetchDishes();
  if (!dishes.length) {
    return null;
  }
  const currentDish = dishes.find(({ id }) => id === params.dishId);
  return (
    <arcticle>
      <span>{currentDish.name}</span>
      <span>{currentDish.price}р</span>
    </arcticle>
  );
}
