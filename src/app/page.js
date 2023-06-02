import React from 'react'
import { restaurants } from '@/mocks'
import { Restaurant } from '@/components/Restaurant/Restaurant'

export default function Home() {
  return (
    <React.Fragment>
      {
        restaurants.map(
          restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}/>
        )
      }
    </React.Fragment>
  )
}
