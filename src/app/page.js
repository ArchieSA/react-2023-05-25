import Link from 'next/link';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Главная страница',
};

export default function Home() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Сервис по поиску лучших ресторанов</h1>
        <p className={styles.description}>
          Наш сервис предоставляет возможность выбрать ресторан по вашим
          предпочтениям:)
        </p>
        <nav className={styles.nav}>
          <Link className={styles.link} href='/restaurant'>
            Список ресторанов
          </Link>
          <Link className={styles.link} href='/dishes'>
            Список ингредиентов
          </Link>
        </nav>
      </div>
    </section>
  );
}
