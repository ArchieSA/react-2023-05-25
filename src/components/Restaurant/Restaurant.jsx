import React from 'react';
import { Menu } from '@/components/Menu/Menu';
import { Reviews } from '@/components/Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return <h2>Empty restaurants</h2>;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>

      <Menu menu={menu} />

      <Reviews reviews={reviews} />
    </div>
  );
};
