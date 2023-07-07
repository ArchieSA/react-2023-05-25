import Link from 'next/link';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Сервис по поиску лучших ресторанов</h1>
        <p className={styles.description}>
          Наш сервис предоставляет возможность выбрать ресторан по вашим
          предпочтениям:)
        </p>
        <Link className={styles.link} href='/restaurant'>
          Список ресторанов
        </Link>
      </div>
    </section>
  );
}
