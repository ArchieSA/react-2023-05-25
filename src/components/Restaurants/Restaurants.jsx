import React from "react";

export const Restaurants = ({ restaurants, children }) => {
  if(!restaurants?.length) {
    return <span>Restaurant List Empty</span>
  }

  return (
    <ul>
      {restaurants.map(
        (restaurant) => (
          <li key={restaurant.id}>{children(restaurant)}</li>
        )
      )}
    </ul>
  )
}