import React, {Suspense} from "react";
import Image from "next/image";
import { MenuContainer } from "@/containers/MenuContainer";
import { BackButton } from '@/components/BackButton/BackButton'
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { ReviewsContainer } from '@/containers/ReviewsContainer'
import { NewReviewFormContainer } from '@/containers/NewReviewFormContainer'
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  const { name, id, img, description } = restaurant;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_inner}>
          <BackButton title='' className={styles.back} />
          <h2 className={styles.name}>{name}</h2>
        </div>
        {img && <Image src={img} width={100} height={80} alt="" />}
      </div>
      <div><i>{description}</i></div>
      <Suspense fallback={<MenuSkeleton />}>
        <MenuContainer restaurantId={id} className={styles.menu} />
      </Suspense>      
      <Suspense fallback={<MenuSkeleton />}>
        <ReviewsContainer restaurantId={id} className={styles.reviews} />
      </Suspense>      
      <NewReviewFormContainer restaurantId={id} />
    </div>
  );
};
