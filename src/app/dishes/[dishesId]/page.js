import { Dish } from "@/components/Dish/Dish";
import { fetchDish } from "@/services";

export default async function DishPage({params}) {
    const dish = await fetchDish(params.dishesId)

    return (
        <div>
            <Dish dish={dish}/>
        </div>
    )
}