import React from "react";
import * as cn from 'classnames';
import styles from "./styles.module.scss";

export const Rating = ({ value, onChange, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      {new Array(5).fill(null).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index + 1)}
          disabled={value === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
