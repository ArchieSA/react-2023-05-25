import React, { memo, useMemo } from "react"
import s from './styles.module.css'

const renderParts = (parts) => <span className={s.ingradients}><br/>&nbsp;&nbsp;{parts}</span>

export const Dish = memo(({name, price, ingredients}) => {
  const parts = useMemo(() => ingredients?.length ? ingredients.join(', ') : undefined, [ingredients])

  return (
    <div>
      <p>
        {name}
        {parts && renderParts(parts)}
        <br/><br/>&nbsp;&nbsp;
        {price ?? '?'}
        {price && ' Usd'}
      </p>
    </div>
  )
})

Dish.displayName = 'Dish'
