/* eslint-disable react/jsx-key */
import { Menu } from "@/components/Menu/Menu";
import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { Reviews } from "@/components/Reviews/Reviews";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.root}>
      <h2 className={styles['root-name']}>{name}</h2>
      <div className={styles['root-body']}>
        <div className={styles['root-img']}>
          IMG
        </div>

        <div className={styles['root-content']}>
          <Menu menu={menu} />
          <Reviews reviews={reviews} />
          <NewReviewForm />
        </div>
      </div>
    </div>
  );
};
