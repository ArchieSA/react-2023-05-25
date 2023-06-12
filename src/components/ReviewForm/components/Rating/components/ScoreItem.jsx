import React from "react";

export const ScoreItem = ({ disabled, score, onclick }) => (
  <button
    name={`s${score}`}
    value={score}
    title={`Оценка ${score}`}
    {...(disabled && { disabled })}
    onClick={(ev) => onclick(Number(ev.target.value))}
  >
    {score}
  </button>
);
