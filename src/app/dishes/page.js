import { fetchDishes } from '@/services';

export const metadata = {
  title: 'Меню',
  description: 'Список блюд',
};

export default async function DishesPage() {
  const dishes = await fetchDishes();
  console.log(dishes);

  return (
    <div>
      {dishes &&
        dishes.map(el => {
          return <span key={el.id}>{el.name}</span>;
        })}
    </div>
  );
}
