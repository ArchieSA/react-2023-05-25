import React, { memo } from "react"
import { Ingradients } from './components/Ingradients'

export const Dish = memo(({name, price, ingredients}) => 
    <div>
      <p>
        {name}
        {<Ingradients ingredients = {ingredients} />}
        <br/><br/>&nbsp;&nbsp;
        {price ?? '?'}
        {price && ' Usd'}
      </p>
    </div>
  )

Dish.displayName = 'Dish'
