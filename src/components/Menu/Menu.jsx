import { DishContainer } from '@/containers/DishContainer';
import classNames from 'classnames';
import styles from './styles.module.scss';

/* eslint-disable react/jsx-key */
export const Menu = ({ menu, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3>Menu</h3>
      <div className={styles.dishList}>
        {menu.map(dishId => (
          <DishContainer key={dishId} dishId={dishId} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
