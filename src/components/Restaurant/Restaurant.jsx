import { MenuContainer } from '@/containers/MenuContainer';
import { HeroWrapper } from '../HeroWrapper/HeroWrapper';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
  const { name, id, img } = restaurant;

  return (
    <div className={styles.root}>
      <HeroWrapper img={img} restaurantName={name} />
      <div className={styles.tabs}>
        <MenuContainer restaurantId={id} className={styles.menu} />
        {/* <ReviewsContainer restaurantId={id} className={styles.reviews} />
      <NewReviewFormContainer restaurantId={id} /> */}
      </div>
    </div>
  );
};
