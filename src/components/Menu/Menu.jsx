import { Dish } from '@/components/Dish/Dish';
import { Htag } from '../Htag/Htag';
import styles from './styles.module.scss';

/* eslint-disable react/jsx-key */
export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return <span>Empty Menu</span>;
  }

  return (
    <div className={styles.root}>
      <Htag tag={'h3'} value={'Menu'} />
      <ul className={styles.list}>
        {menu.map(dish => (
          <li className={styles.listItem}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
