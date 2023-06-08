import React from 'react';
import { Review } from '../Review/Review';

/* eslint-disable react/jsx-key */
export const Reviews = ({ reviews }) => {
    if (!reviews?.length) {
        return <span>Empty Reviews</span>;
    }

    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map(({ text }) => (
                    <li><Review text={text}/></li>
                ))}
            </ul>
        </div>
    );
};
