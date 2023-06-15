/* eslint-disable react/jsx-key */
import React from "react";
import star from "@/icons/star-gold.svg";

export const Rating = ({ value, onChange }) => {
  // мягко говоря не очень очевидные пути к файлам (удалось найти через импорт объекта и вывод его консольлог)
  // я так понимаю есть готовый компонент Image может в нем пути более очивидны как например в ссылка на папку public
  const styleStar = ["/_next/static/media/star-gold.c8bfed77.svg", "/_next/static/media/star.6812e7c3.svg"]
  console.log(star);
  return (
    <div>
      {new Array(5).fill(null).map((_, index) => (
        <img
          src={value === index + 1 ? styleStar[0] : styleStar[1]}
          key={index}
          onClick={() => onChange(index + 1)}
          width="32"
        // disabled={value === index + 1}
        />
      ))}
    </div>
  );
};
