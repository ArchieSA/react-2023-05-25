import { fetchAllDishes } from "@/services";

export default async function DishPage({ params }) {
  const dishes = await fetchAllDishes();
  let dish = dishes.find((dish) => dish.id === params.dishId)

  return (
    <div>
      <div>Name: {dish.name}</div>
      <div>Price: {dish.price}p</div>
      <span>Ingredients: </span>
      {dish.ingredients.map((ingredient, index) => {
        if (index !== dish.ingredients.length - 1) {
          return (<span key={index}>{ingredient}, </span>)
        } else {
          return (<span key={index}>{ingredient}</span>)
        }
      })}
    </div>
  );
}
