import { useContext } from 'react'
import { RestaurantContext } from '../contexts/RestaurantContext'

export const useRestaurantState = () => useContext(RestaurantContext)
