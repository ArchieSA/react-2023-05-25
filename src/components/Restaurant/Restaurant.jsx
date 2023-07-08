import styles from "./styles.module.scss";
import Link from "next/link";
import { RestaurantHeader } from '@/components/RestaurantHeader/RestaurantHeader'
import { ReviewsContainer } from "@/containers/ReviewsContainer";
import { NewReviewFormContainer } from "@/containers/NewReviewFormContainer";

export const Restaurant = ({ restaurant }) => {
  const { id } = restaurant;

  return (
    <div className={styles.root}>
      <RestaurantHeader restaurant={restaurant} />
      <Link
        className={styles.menu}
        href={`/restaurant/${id}/dishes`}
      >
        Меню
      </Link>

      <ReviewsContainer restaurantId={id} className={styles.reviews} />
      <NewReviewFormContainer restaurantId={id} />
    </div>
  );
};
