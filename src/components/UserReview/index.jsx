import React from "react";

export const UserReview = ({review}) => {
    const {id, user, text, rating} = review
    return (
        <li key={id}>
            <p >
               <span>{user}: </span>  
               <span>{text}</span>
            </p>
            <p>Your rating: {rating}</p>
            <hr/>
        </li>
    )
}