import React, { useCallback } from "react";
import { Dish } from "../Dish/Dish";
import { Ordering } from "../Ordering/Ordering";

export const MenuItem = ({ dish, orderAmount, onOrderDish }) => {
  const { id } = dish
  const onOrder = useCallback((flag) => onOrderDish(id, flag), [id, onOrderDish])

  return (
    <>
      <Dish dish={dish} showDetail={orderAmount > 0} />
      <Ordering
        id={id}
        amount={orderAmount}
        onOrder={onOrder}
      />
    </>
  )
}
