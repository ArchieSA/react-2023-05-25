import React from "react";

export const Rating = ({ value, onChange }) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={value.name}
          onChange={(event) => onChange("changeName", event.target.value)}
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={value.text}
          onChange={(event) => onChange("changeText", event.target.value)}
        />
      </div>
      {rating.map((num) => {
        return num === value.rating ? (
          <button disabled>{num}</button>
        ) : (
          <button onClick={() => onChange("changeRating", num)}>{num}</button>
        );
      })}
    </div>
  );
};
