import { Header } from '@/components/Header/Header';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <Main className={styles.content}>{children}</Main>
      <Footer classNames={styles.footer} />
    </div>
  );
};
