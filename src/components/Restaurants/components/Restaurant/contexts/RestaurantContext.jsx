import React, { createContext, useReducer } from 'react'
import { restaurantReducer } from './restaurantReducer'
import { INITIAL_STATE } from './const'

export const RestaurantContext = createContext(INITIAL_STATE)
export const RestaurantControllerContext = createContext((state = {}) => state)

export const RestaurantProvider = ({ children, restaurantId }) => {
  const [restaurantState, dispatch] = useReducer(restaurantReducer, {...INITIAL_STATE, restaurantId})

  // стэйт и dispatch положены в разные контексты, чтобы контекст с dispatch не обновлялся
  return <RestaurantControllerContext.Provider value = {dispatch}>
    <RestaurantContext.Provider value = {restaurantState}>{children}</RestaurantContext.Provider>
  </RestaurantControllerContext.Provider>
}
