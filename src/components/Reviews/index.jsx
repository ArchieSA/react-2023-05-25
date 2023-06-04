import React from "react";
import { UserReview } from "../UserReview";

export const Reviews = ({reviews}) => {
    if(!reviews?.length) {
        return (
            <div>{'There are no reviews yet :('}</div>
        )
    }
 return (
    <div className="reviews_container">
        <h3>Reviews:</h3>      
        <ul>
        {reviews.map(review => (
                <UserReview review={review} />
            ))}
        </ul>
    </div>
 )
}