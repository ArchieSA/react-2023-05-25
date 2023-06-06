import React from "react"
import { Menu } from '../Menu'
import { Reviews } from '../Reviews'

export const Restaurant = ({ name, menu, reviews }) => (<div>
  <h1>{name}</h1>
  <Menu menu={menu} />
  <Reviews reviews={reviews} />
</div>)
