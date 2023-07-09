import { restaurantApi } from '@/services';
import styles from './styles.module.scss';

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
    <article className={styles.root}>
      <span>Название: {currentDish.name}</span>
      <span>Цена: {currentDish.price}р</span>
    </article>
  );
}
