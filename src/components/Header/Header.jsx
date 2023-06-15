import { Logo } from '../icons/Logo';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Logo />
      </div>
    </header>
  );
};
