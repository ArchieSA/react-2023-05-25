import { useEffect } from 'react';
import { Menu } from '@/components/Menu/Menu';
import NewReviewForm, { resetRevieForm } from '@/components/NewReviewForm/NewReviewForm';
import { Reviews } from '@/components/Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  useEffect(
    () => resetRevieForm(),
  )

  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name.replace(/<\/?u>/g, '')}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <NewReviewForm />
    </div>
  );
};
