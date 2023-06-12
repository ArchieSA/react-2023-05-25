import update from 'immutability-helper'
import { RESTAURANT_ACTIONS } from './restaurantActions'
import { INITIAL_STATE } from './const'

const versionInc = {
  version: {
    $apply: function (prevValue) {
      return prevValue + 1
    },
  },
}

const simpleUpdate = (state) => (field, value) =>
  update(state, {
    [field]: { $set: value },
    ...versionInc,
  })


export const restaurantReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  const upater = simpleUpdate(state)

  switch (type) {
    case RESTAURANT_ACTIONS.CHANGE_NAME:
      return upater('name', payload )

    case RESTAURANT_ACTIONS.CHANGE_TEXT:
      return upater('text', payload )

    case RESTAURANT_ACTIONS.CHANGE_RATING:      
      return upater('rating', payload )

    case RESTAURANT_ACTIONS.ORDER_DISH:
      return update(state, { order: {[payload]: { $apply: (current) => (current ?? 0) + 1 }}, ...versionInc });

    case RESTAURANT_ACTIONS.UNORDER_DISH:
      return update(state, { order: {[payload]: { $apply: (current) => (current ?? 1) - 1 }}, ...versionInc });    

    case RESTAURANT_ACTIONS.REMOVE_DISHORDER:
      return update(state, { order: { $apply: (current) => {
        const tmp = {...current}
        delete tmp[payload]
        return tmp
      } }, ...versionInc });

    case RESTAURANT_ACTIONS.CLEAR_ORDERS:
      return upater('order', {} )

    default:
      return state;
  }
}
