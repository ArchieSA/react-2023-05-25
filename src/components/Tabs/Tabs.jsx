import { Button } from '../Button/Button';
import styles from './styles.module.scss';

export const Tabs = ({ restaurants, onSwitch }) => {
  return (
    <nav>
      <ul className={styles.list}>
        {restaurants.map(({ name }, index) => {
          return (
            <li key={index}>
              <Button onClick={() => onSwitch(index)} viewVariant={'tab'}>
                {name}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
