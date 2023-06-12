import React, { memo } from "react"
import { ScoreItem } from "./components/ScoreItem"
import { RATINGS } from "@/utils/rating"
import s from "./styles.module.css"

export const Rating = memo(({ value, onChange, disabled }) => (
  <span className={s.container}>
    {RATINGS.map((score) => (
      <ScoreItem
        key={`item_${score}`}
        score={score}
        disabled={value === score || disabled}
        onclick={onChange}
      />
    ))}
  </span>
))

Rating.displayName = "Rating"
