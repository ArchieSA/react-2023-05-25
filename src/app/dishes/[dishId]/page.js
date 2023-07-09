import { Restaurant } from "@/components/Restaurant/Restaurant";
import { DishContainer } from "@/containers/DishContainer";
import { fetchDishes, fetchOneDish, fetchRestaurant, fetchRestaurants } from "@/services";

export async function generateStaticParams() {
  const dish = await fetchDishes();
  return [{ dishId: dish[0].id }];
}

export default async function DishPage({ params }) {
  const dish = await fetchOneDish(params.dishId);

  return (
    <div>
      <DishContainer dish={dish} />
    </div>
  );
}