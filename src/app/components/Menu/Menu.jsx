import React, { memo } from "react"
import { Dish } from "../Dish"

const renderDish = (dish) => (
  <li key={dish.id}>
    <Dish {...dish} />
  </li>
)

export const Menu = memo(({ menu }) =>
   (
    <div>
      {menu?.length ?
        <>
          <h2>Меню</h2>
          <ul>{menu.map(renderDish)}</ul>
        </> 
        :
        'Пустое меню'
      }
    </div>
  ))

Menu.displayName = 'Menu'
