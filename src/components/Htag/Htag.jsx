import styles from './styles.module.scss';

export const Htag = ({ tag, value }) => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{value}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{value}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{value}</h3>;
    case 'h4':
      return <h3 className={styles.h3}>{value}</h3>;
    default:
      return <></>;
  }
};
