import React from "react";

export const Review = ({ review }) => {
  if(!review) return null;

  const { user, text } = review;

  return (
    <div>
      <p>{user}</p>
      <p>{text}</p>
    </div>   
  )
}