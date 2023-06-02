import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews';

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return <span>Loading...</span>;
  }
  const { menu, reviews, name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
