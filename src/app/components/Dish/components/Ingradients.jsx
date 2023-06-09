import React from "react"
import s from '../styles.module.css'

export const Ingradients = ({ ingredients }) => {
  if (!ingredients?.length) {
    return null
  }

  return <span className={s.ingradients}><br/>&nbsp;&nbsp;{ingredients.join(', ')}</span>
}
