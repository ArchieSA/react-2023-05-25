import React, { useCallback } from "react";

export const ScoreItem = ({ disabled, score, onclick }) => {
  const onClick = useCallback((ev) => onclick(Number(ev.target.value)), [onclick])

  return <button name={`s${score}`} value={score} title={`Оценка ${score}`} {...(disabled && {disabled})} onClick={onClick} >{score}</button>
}
