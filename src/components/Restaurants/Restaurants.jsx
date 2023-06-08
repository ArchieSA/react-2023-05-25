import React from 'react';
import { Restaurant } from '../Restaurant/Restaurant';

/* eslint-disable react/jsx-key */
export const RestaurantList = ({ restaurants }) => {


  if (!restaurants?.length) {
      return <span>Empty Restaurant List</span>;
  }

    return (
        <div>
            <h1>Restaurants</h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <li>
                        <Restaurant restaurant={restaurant} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
