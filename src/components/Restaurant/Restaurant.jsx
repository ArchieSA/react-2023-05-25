import React from 'react';
import { Menu } from '@/components/Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

/* eslint-disable react/jsx-key */
export const Restaurant = ({ restaurant }) => {

  const { name, menu, reviews } = restaurant;

    if (!name) {
        return <span>Empty Restaurant</span>;
    }

    return (
        <div>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    );
};
