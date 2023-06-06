import React from 'react';
import { Menu } from '@/components/Menu/Menu';

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
            {/* Reviews */}
            <h3>Reviews</h3>
            <ul>
                {reviews.map(({ text }) => (
                    <li>{text}</li>
                ))}
            </ul>
        </div>
    );
};
