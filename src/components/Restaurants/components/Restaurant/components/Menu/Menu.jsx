import React, { useCallback, useMemo, memo } from "react";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { useRestaurantController } from "../../../Restaurant/hooks/useRestaurantController";
import { useRestaurantState } from "../../../Restaurant/hooks/useRestaurantState";

export const Menu = memo(({ menu }) => {
  const { orderDish, unorderDish, removeDishOrder, clearOrders } = useRestaurantController();
  const { order } = useRestaurantState();

  const hasOrders = useMemo(() => Object.keys(order).some((dishId) => order[dishId] > 0), [order])
  const onOrderDishFacade = useCallback((id, flag) => {
    switch (flag) {
      case 1:
        orderDish(id);
        break;
      case -1:
        unorderDish(id);
        break;
      default:
        removeDishOrder(id);
        break;
    }
  }, [orderDish, removeDishOrder, unorderDish])

  if (!menu?.length) {
    return <span>Empty Menu</span>;
  }

  const renderItem = (dish) => {
    const { id } = dish
    return <li key={id}><MenuItem dish={dish} orderAmount={order[id]} onOrderDish={onOrderDishFacade} /></li>
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(renderItem)}
      </ul>
      <button
        name="remove-all"
        title="Удалить всё"
        {...(!hasOrders && { disabled: true })}
        onClick={clearOrders}
      >
        Удалить все заказы
      </button>
    </div>
  );
});

Menu.displayName = 'Menu'
