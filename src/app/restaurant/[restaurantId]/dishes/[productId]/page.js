import { DishContainer } from "@/containers/DishContainer";
import { fetchDishe } from "@/services";

export default async function DishePage({ params }) {
  const { productId } = params
  const product = await fetchDishe(productId)

  return (
    <DishContainer dish={product} />
  );
}
