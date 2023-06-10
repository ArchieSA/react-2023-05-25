export const RESTAURANT_ACTIONS = {
  /** Изменить имя пользователя */
  CHANGE_NAME: 'changeName',
  /** Изменить отзыв */
  CHANGE_TEXT: 'changeText',
  /** Изменить рейтинг */
  CHANGE_RATING: 'changeRating',
  /** Увеличить счётчик блюда в заказе */
  ORDER_DISH: 'orderDish',
  /** Уменьшить счётчик блюда в заказе */
  UNORDER_DISH: 'unorderDish',
  /** Удалить весь заказ блюда */
  REMOVE_DISHORDER: 'removeDishOrder',
  /** Удалить все блюда из заказа */
  CLEAR_ORDERS: 'clearOrders',
}

const action = (type) => (payload) => ({ type, payload })

export const restaurantActionCreators = Object.entries(RESTAURANT_ACTIONS).reduce((acc, [_, creatorName]) => {
  acc[creatorName] = action(creatorName)
  return acc
}, {})
