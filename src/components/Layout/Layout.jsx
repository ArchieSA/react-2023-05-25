import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
