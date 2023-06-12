import { useContext, useMemo } from 'react'
import { RestaurantControllerContext } from '../contexts/RestaurantContext'
import { restaurantActionCreators } from '../contexts/restaurantActions'

export const useRestaurantController = () => {
  const dispatch = useContext(RestaurantControllerContext)

  return useMemo(() => {
    // action creators уже карированы типом, поэтому тут достаточно только описать вызов
    const actions = Object.keys(restaurantActionCreators).reduce(
      (prev, key) => ((prev[key] = (...args) => dispatch(restaurantActionCreators[key](...args))), prev),
      {}
    )    

    return actions
  }, [dispatch])
}
