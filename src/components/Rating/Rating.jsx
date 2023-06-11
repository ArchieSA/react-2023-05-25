import React from "react";

export const Rating = ({ value, onChange }) => {
  if(!value)
    return null;

  return <>
    {[1,2,3,4,5].map((grade) => (
      <button onClick={()=>onChange(grade)} disabled={value === grade}>{grade}</button>
    ))}
  </>;
};
