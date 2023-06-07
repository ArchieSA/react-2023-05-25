import React from "react";

export const Review = ({review}) => {

    const {user, text, rating} = review;

    return  <div>
        <p>User: {user}</p>
        <p>Comment: {text}</p>
        <p>Rating: {rating}</p>
    </div>
};