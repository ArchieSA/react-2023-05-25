import styles from "./styles.module.scss";
import { MenuContainer } from "@/containers/MenuContainer";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <MenuContainer restaurantId={id} className={styles.menu} />
      <Reviews restaurantId={id} className={styles.reviews} />
    </div>
  );
};
