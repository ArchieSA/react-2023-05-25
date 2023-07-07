import styles from './styles.module.scss';

export const HeroWrapper = ({ img, restaurantName }) => {
  //Q:Очень не идеальный вариант, поэтом жду рекомендацию по исправлению)
  return (
    <div className={styles.root}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <div className={styles.heroInfo}>
        <h2 className={styles.heroTitle}>{restaurantName}</h2>
      </div>
    </div>
  );
};
