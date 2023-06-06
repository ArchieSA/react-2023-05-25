import React from 'react';
import { Menu } from "@/components/Menu/Menu";
import { ReviewsList } from '../ReviewsList/ReviewsList';

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <h3>Reviews</h3>
      <ReviewsList reviews={reviews}/>
    </div>
  )
}
