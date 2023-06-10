import React, { memo } from "react";
import { Rating } from "./components/Rating/Rating";
import { useRestaurantState } from '@/components/Restaurants/components/Restaurant/hooks/useRestaurantState'
import { useRestaurantController } from '@/components/Restaurants/components/Restaurant/hooks/useRestaurantController'
import s from "./styles.module.css"

export const ReviewForm = memo(() => {
  const {name, text, rating, restaurantId} = useRestaurantState()
  const {changeName, changeText, changeRating} = useRestaurantController()

  return (
    <div>
      Review for &quot;{restaurantId}&quot;<br/><br/>
      <div>
        <label>Name&nbsp;</label>
        <input
          value={name}
          onChange={(event) => changeName(event.target.value)}
        />
      </div>
      <div>
        <label>Text&nbsp;</label>
        <input
          value={text}
          onChange={(event) => changeText(event.target.value)}
        />
      </div>
      <div className={s.ratingContainer}>
        <label>Rating</label>
        <Rating
          value={rating}
          onChange={(value) => changeRating(value)}
        />
      </div>
    </div>
  );
})

ReviewForm.displayName = 'ReviewForm'
