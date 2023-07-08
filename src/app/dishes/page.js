import { restaurantApi } from '@/services';
import Link from 'next/link';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Меню',
  description: 'Список блюд',
};

export default async function DishesPage() {
  const dishes = await restaurantApi.fetchDishes();

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Список ингредиентов</h2>
      <ul className={styles.list}>
        {dishes &&
          dishes.map(el => {
            return (
              <li key={el.id} className={styles.listItem}>
                <Link className={styles.link} href={`dishes/${el.id}`}>
                  {el.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
