import React, { memo } from "react"

export const Review = memo(({user, text, rating}) => {

  return (
    <div>
      <p>{user}: {text}</p>
      <p>&nbsp;&nbsp;{rating}</p>
    </div>
  )
})

Review.displayName = 'Review'
