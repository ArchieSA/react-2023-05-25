import styles from './styles.module.scss';

export const RestaurantHeader = ({ restaurant }) => {
  const { name, img } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      {
        img && (
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(${img})` }}
          />
        )
      }
    </div>
  )
}
