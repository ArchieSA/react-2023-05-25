import { Menu } from "@/components/Menu/Menu";
import { Reviews } from "@/components/Reviews/Reviews";

export const Restaurants = ({ restaurant }) => {

    const { name, menu, reviews } = restaurant;

    return (
        <>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </>
    )
}