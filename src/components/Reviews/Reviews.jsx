import React from "react";
import { Review } from "../Review/Review";


export const Reviews = ({reviews}) => {

    if (!reviews?.length) {
        return <span>Empty Reviews</span>;
      }

    return (
        <div>
          <h3>Reviews</h3>
            <ul>
              {reviews.map((review) => (
                  <li>
                      <Review review={review} />
                  </li>
              ))}
            </ul>
        </div>
    )
}