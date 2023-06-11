import React from "react";
const rateList = [1, 2, 3, 4, 5]

export const Rating = ({ value, onChange }) => {
  return <div>{
    rateList.map(rate => (
      <button onClick={rate !== value ? () => onChange(rate) : undefined} disabled={rate === value}>{rate}</button>
    ))
  }</div>;
};
