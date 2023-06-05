import { Post } from "@/components/Post/Post";
import React from "react";


/* eslint-disable react/jsx-key */
export const Review = ({ reviews }) => {
  if (!reviews?.length) {
    return <span>Empty Reviews</span>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((post) => (
          <li>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
